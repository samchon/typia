import * as path from "node:path";
import * as fs from "node:fs";

import {
  readProjectConfig,
  type ParsedProjectConfig,
  type ProjectPluginConfig,
} from "./project";

export type NativeRewriteMode = string;

export interface TtscPluginFactoryContext {
  binary: string;
  cwd: string;
  projectRoot: string;
  tsconfig: string;
}

export interface TtscTransformContext {
  code: string;
  command: "build" | "transform";
  cwd: string;
  outputFile?: string;
  projectRoot: string;
  sourceFile?: string;
  tsconfig: string;
}

export interface TtscPlugin {
  name: string;
  nativeMode?: NativeRewriteMode;
  nativeBinary?: string;
  transformOutput?(context: TtscTransformContext): string;
}

export type TtscPluginFactory = (
  config: ProjectPluginConfig,
  context: TtscPluginFactoryContext,
) => TtscPlugin;

export type TtscPluginModule = TtscPlugin | TtscPluginFactory;

export interface LoadedPlugins {
  compatibilityFallback: boolean;
  nativeBinary: string | null;
  nativeMode: NativeRewriteMode;
  plugins: TtscPlugin[];
  project: ParsedProjectConfig;
}

export interface LoadPluginsOptions {
  binary: string;
  cwd?: string;
  entries?: readonly ProjectPluginConfig[] | false;
  file?: string;
  tsconfig?: string;
}

export function definePlugin<T extends TtscPluginModule>(plugin: T): T {
  return plugin;
}

export function loadProjectPlugins(options: LoadPluginsOptions): LoadedPlugins {
  const project = readProjectConfig({
    cwd: options.cwd,
    file: options.file,
    tsconfig: options.tsconfig,
  });
  const entries =
    options.entries === false
      ? []
      : [...(options.entries ?? project.compilerOptions.plugins)].filter(
          (entry) => entry.enabled !== false,
        );
  if (entries.length === 0) {
    return {
      compatibilityFallback: false,
      nativeBinary: null,
      nativeMode: "none",
      plugins: [],
      project,
    };
  }

  const context: TtscPluginFactoryContext = {
    binary: options.binary,
    cwd: path.resolve(options.cwd ?? process.cwd()),
    projectRoot: project.root,
    tsconfig: project.path,
  };
  const plugins = entries.map((entry) => loadPluginEntry(entry, context));

  let nativeBinary: string | null = null;
  let nativeMode: NativeRewriteMode = "none";
  for (const plugin of plugins) {
    if (plugin.nativeBinary && (!plugin.nativeMode || plugin.nativeMode === "none")) {
      throw new Error(
        `ttsc: plugin "${plugin.name}" declared nativeBinary without a non-empty nativeMode`,
      );
    }
    if (!plugin.nativeMode || plugin.nativeMode === "none") {
      continue;
    }
    if (nativeMode !== "none" && nativeMode !== plugin.nativeMode) {
      throw new Error(
        `ttsc: multiple native plugin modes requested (${nativeMode}, ${plugin.nativeMode})`,
      );
    }
    nativeMode = plugin.nativeMode;
    if (plugin.nativeBinary) {
      if (nativeBinary !== null && nativeBinary !== plugin.nativeBinary) {
        throw new Error(
          `ttsc: multiple native plugin binaries requested (${nativeBinary}, ${plugin.nativeBinary})`,
        );
      }
      nativeBinary = plugin.nativeBinary;
    }
  }
  return {
    compatibilityFallback: false,
    nativeBinary,
    nativeMode,
    plugins,
    project,
  };
}

export function applyPluginTransforms(
  plugins: readonly TtscPlugin[],
  context: TtscTransformContext,
): string {
  let code = context.code;
  for (const plugin of plugins) {
    if (!plugin.transformOutput) {
      continue;
    }
    code = plugin.transformOutput({ ...context, code });
  }
  return code;
}

function loadPluginEntry(
  entry: ProjectPluginConfig,
  context: TtscPluginFactoryContext,
): TtscPlugin {
  const specifier = entry.transform;
  if (typeof specifier !== "string" || specifier.length === 0) {
    throw new Error(`ttsc: plugin entry is missing a string "transform" field`);
  }

  const request = resolvePluginRequest(specifier, context.projectRoot);
  const mod = require(request) as {
    createTtscPlugin?: TtscPluginFactory;
    default?: TtscPluginModule;
  } & Partial<Record<"plugin", TtscPluginModule>>;
  const candidate =
    mod.createTtscPlugin ?? mod.default ?? mod.plugin ?? (mod as unknown as TtscPluginModule);
  if (typeof candidate === "function") {
    return candidate(entry, context);
  }
  if (candidate && typeof candidate === "object" && typeof candidate.name === "string") {
    return candidate;
  }
  throw new Error(`ttsc: plugin "${specifier}" does not export a valid ttsc plugin`);
}

function resolvePluginRequest(specifier: string, projectRoot: string): string {
  if (path.isAbsolute(specifier)) {
    return specifier;
  }
  if (isRelativePluginSpecifier(specifier)) {
    return path.resolve(projectRoot, specifier);
  }
  try {
    return require.resolve(specifier, { paths: [projectRoot] });
  } catch (error) {
    const sourceFallback = resolveSourceCheckoutPlugin(specifier, projectRoot);
    if (sourceFallback) {
      return sourceFallback;
    }
    throw error;
  }
}

function isRelativePluginSpecifier(specifier: string): boolean {
  return (
    specifier === "." ||
    specifier === ".." ||
    specifier.startsWith("./") ||
    specifier.startsWith("../") ||
    specifier.startsWith(".\\") ||
    specifier.startsWith("..\\")
  );
}

function resolveSourceCheckoutPlugin(
  specifier: string,
  projectRoot: string,
): string | null {
  const normalized = specifier.replace(/\\/g, "/");
  const match = normalized.match(/^(.*)\/lib\/ttsc\/plugin$/);
  if (!match) {
    return null;
  }
  try {
    const packageJson = require.resolve(`${match[1]}/package.json`, {
      paths: [projectRoot],
    });
    const candidate = path.join(path.dirname(packageJson), "bin", "ttsc-plugin.cjs");
    return fs.existsSync(candidate) ? candidate : null;
  } catch {
    return null;
  }
}
