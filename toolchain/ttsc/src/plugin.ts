import fs from "node:fs";
import path from "node:path";

import {
  type NativeRewriteMode,
  type TtscNativeBackend,
  resolveNativeBackend,
} from "./native";
import {
  type ParsedProjectConfig,
  type ProjectPluginConfig,
  readProjectConfig,
} from "./project";

export type {
  NativePluginContractVersion,
  NativeRewriteMode,
  TtscNativeBackend,
} from "./native";

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
  native?: TtscNativeBackend;
  /** @deprecated Use `native.mode` instead. */
  nativeMode?: NativeRewriteMode;
  /** @deprecated Use `native.binary` instead. */
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
  nativeBackend: TtscNativeBackend | null;
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
      nativeBackend: null,
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
  let nativeBackend: TtscNativeBackend | null = null;
  let nativeMode: NativeRewriteMode = "none";
  for (const plugin of plugins) {
    const backend = resolveNativeBackend(plugin);
    if (!backend) {
      continue;
    }
    if (nativeMode !== "none" && nativeMode !== backend.mode) {
      throw new Error(
        `ttsc: multiple native plugin modes requested (${nativeMode}, ${backend.mode})`,
      );
    }
    nativeMode = backend.mode;
    nativeBackend = backend;
    if (backend.binary) {
      if (nativeBinary !== null && nativeBinary !== backend.binary) {
        throw new Error(
          `ttsc: multiple native plugin binaries requested (${nativeBinary}, ${backend.binary})`,
        );
      }
      nativeBinary = backend.binary;
    }
  }
  return {
    compatibilityFallback: false,
    nativeBackend,
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
    mod.createTtscPlugin ??
    mod.default ??
    mod.plugin ??
    (mod as unknown as TtscPluginModule);
  if (typeof candidate === "function") {
    return candidate(entry, context);
  }
  if (
    candidate &&
    typeof candidate === "object" &&
    typeof candidate.name === "string"
  ) {
    return candidate;
  }
  throw new Error(
    `ttsc: plugin "${specifier}" does not export a valid ttsc plugin`,
  );
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
  const match = normalized.match(/^(.*)\/lib\/transform$/);
  if (!match) {
    return null;
  }
  try {
    const packageJson = require.resolve(`${match[1]}/package.json`, {
      paths: [projectRoot],
    });
    const packageRoot = path.dirname(packageJson);
    const candidates = [
      path.join(packageRoot, "lib", "transform.js"),
      path.join(packageRoot, "src", "transform.ts"),
      path.join(packageRoot, "bin", "ttsc-plugin.cjs"),
    ];
    return candidates.find((candidate) => fs.existsSync(candidate)) ?? null;
  } catch {
    return null;
  }
}
