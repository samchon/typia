import * as path from "node:path";

import {
  readProjectConfig,
  type ParsedProjectConfig,
  type ProjectPluginConfig,
} from "./project";

export type NativeRewriteMode = "none" | "typia";

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
  transformOutput?(context: TtscTransformContext): string;
}

export type TtscPluginFactory = (
  config: ProjectPluginConfig,
  context: TtscPluginFactoryContext,
) => TtscPlugin;

export type TtscPluginModule = TtscPlugin | TtscPluginFactory;

export interface LoadedPlugins {
  compatibilityFallback: boolean;
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

const BUILTIN_TYPIA_SPECIFIERS = new Set<string>([
  "@typia/ttsc/plugin/typia",
  "typia/lib/transform",
]);

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
      compatibilityFallback: true,
      nativeMode: "typia",
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

  let nativeMode: NativeRewriteMode = "none";
  for (const plugin of plugins) {
    if (!plugin.nativeMode || plugin.nativeMode === "none") {
      continue;
    }
    if (nativeMode !== "none" && nativeMode !== plugin.nativeMode) {
      throw new Error(
        `ttsc: multiple native plugin modes requested (${nativeMode}, ${plugin.nativeMode})`,
      );
    }
    nativeMode = plugin.nativeMode;
  }
  return {
    compatibilityFallback: false,
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
  if (BUILTIN_TYPIA_SPECIFIERS.has(specifier)) {
    return path.resolve(__dirname, "plugins", "typia.js");
  }
  if (path.isAbsolute(specifier)) {
    return specifier;
  }
  if (specifier.startsWith(".") || specifier.includes(path.sep)) {
    return path.resolve(projectRoot, specifier);
  }
  return require.resolve(specifier, { paths: [projectRoot] });
}
