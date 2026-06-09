import {
  bootTtsc,
  parseResult,
  type IBootResult,
  type ITtscCompileResult,
} from "@ttsc/wasm";
import {
  buildTsconfigJSON,
  DEFAULT_ENTRY_FILE,
  DEFAULT_TSCONFIG_PATH,
  DEFAULT_TYPIA_PLUGIN_NAME,
  DEFAULT_WORK_DIR,
  installDependenciesIntoMemFS,
  mapDiagnostic,
  normalizeError,
  pickEmittedJS,
  type ICompilerService,
  type ICreateWorkerCompilerOptions,
  type ITransformOptions,
} from "@ttsc/playground";

const TYPIA_OPTION_KEYS = [
  "finite",
  "numeric",
  "functional",
  "undefined",
] as const;

type ModuleKind = "ESNext" | "CommonJS";
type TypiaPluginEntry = {
  transform: string;
} & Partial<Record<(typeof TYPIA_OPTION_KEYS)[number], boolean>>;

interface ITypiaTransformOutput {
  typescript: Record<string, string>;
}

export function createTypiaWorkerCompiler(
  options: ICreateWorkerCompilerOptions,
): ICompilerService {
  const workDir = options.workDir ?? DEFAULT_WORK_DIR;
  const tsconfigPath = options.tsconfigPath ?? DEFAULT_TSCONFIG_PATH;
  const entryFile = options.entryFile ?? DEFAULT_ENTRY_FILE;

  const typiaPlugin =
    options.typiaPlugin === false ? null : (options.typiaPlugin ?? {});
  const typiaPluginName = typiaPlugin?.name ?? DEFAULT_TYPIA_PLUGIN_NAME;
  const typiaTransformModule =
    typiaPlugin?.transformModule ?? "typia/lib/transform";

  let boot: Promise<IBootResult> | null = null;
  function getBoot(): Promise<IBootResult> {
    if (boot) return boot;
    boot = (async () => {
      const result = await bootTtsc({
        wasmUrl: options.wasmUrl,
        wasmExecUrl: options.wasmExecUrl,
        apiName: options.apiName,
      });
      if (typiaPlugin?.mount) await typiaPlugin.mount(result.host, workDir);
      return result;
    })().catch((err) => {
      boot = null;
      throw err;
    });
    return boot;
  }

  let busy: Promise<unknown> = Promise.resolve();
  const enqueue = <T>(fn: () => Promise<T>): Promise<T> => {
    const next = busy.then(fn, fn);
    busy = next.catch(() => {});
    return next;
  };

  const buildTsconfig = (
    module: ModuleKind,
    transformOptions: ITransformOptions | undefined,
  ): string =>
    buildTsconfigJSON({
      module,
      compilerOptions: {
        ...(options.extraCompilerOptions ?? {}),
        ...(typiaPlugin
          ? {
              plugins: [
                createTypiaPluginEntry(typiaTransformModule, transformOptions),
              ],
            }
          : {}),
      },
    });

  const projectFiles = (
    source: string,
    tsconfigText: string,
  ): Record<string, string> => ({
    [`${workDir}/${tsconfigPath}`]: tsconfigText,
    [`${workDir}/${entryFile}`]: source,
  });

  const writeProject = (
    host: IBootResult["host"],
    files: Record<string, string>,
  ): void => {
    for (const [path, text] of Object.entries(files))
      host.writeFile(path, text);
  };

  const applyTypiaTransform = async (
    api: IBootResult["api"],
    host: IBootResult["host"],
  ): Promise<void> => {
    if (!typiaPlugin) return;
    try {
      const raw = await api.plugin({
        name: typiaPluginName,
        command: "transform",
        cwd: workDir,
        tsconfig: tsconfigPath,
        output: "ts",
      });
      if (!raw.stdout) return;
      const transformed = safeParseTypiaTransform(raw.stdout);
      if (!transformed) return;
      for (const [rel, text] of Object.entries(transformed.typescript)) {
        host.writeFile(joinUnder(workDir, rel), text);
      }
    } catch {
      // Keep the playground usable; the following build still reports tsgo
      // diagnostics for the user's source.
    }
  };

  const runBuildPipeline = async (
    source: string,
    runTypia: boolean,
    module: ModuleKind,
    transformOptions: ITransformOptions | undefined,
  ): Promise<ICompilerService.IResult> => {
    try {
      const { api, host } = await getBoot();
      writeProject(
        host,
        projectFiles(source, buildTsconfig(module, transformOptions)),
      );
      if (runTypia) await applyTypiaTransform(api, host);
      const raw = await api.build({
        cwd: workDir,
        tsconfig: tsconfigPath,
      });
      if (raw.code !== 0 && !raw.result) {
        return {
          type: "error",
          target: "javascript",
          value: {
            message:
              raw.stderr || "ttsc: build failed without a result payload",
          },
        };
      }
      const parsed = parseResult<ITtscCompileResult>(raw);
      if (!parsed) {
        return {
          type: "error",
          target: "javascript",
          value: { message: "ttsc: result JSON could not be parsed" },
        };
      }
      const diagnostics = (parsed.diagnostics ?? []).map((d) =>
        mapDiagnostic(d, source),
      );
      const js = pickEmittedJS(parsed.output ?? {}, entryFile);
      const errors = diagnostics.filter((d) => d.severity === "error");
      if (errors.length > 0) {
        return {
          type: "failure",
          target: "javascript",
          value: js ?? "",
          diagnostics,
        };
      }
      return { type: "success", target: "javascript", value: js ?? "" };
    } catch (error) {
      return {
        type: "error",
        target: "javascript",
        value: normalizeError(error),
      };
    }
  };

  return {
    installDependencies: (props) =>
      enqueue(async () => {
        const { host } = await getBoot();
        return installDependenciesIntoMemFS(host, workDir, props);
      }),
    compile: (props) =>
      enqueue(() =>
        runBuildPipeline(
          props.source,
          shouldRunTypia(props.options),
          "ESNext",
          props.options,
        ),
      ),
    bundle: (props) =>
      enqueue(() =>
        runBuildPipeline(
          props.source,
          shouldRunTypia(props.options),
          "CommonJS",
          props.options,
        ),
      ),
    lint: () => enqueue(async () => ({ diagnostics: [] })),
  };
}

export function createTypiaPluginEntry(
  transformModule: string,
  options: ITransformOptions | undefined,
): TypiaPluginEntry {
  const entry: TypiaPluginEntry = { transform: transformModule };
  for (const key of TYPIA_OPTION_KEYS) {
    const value = options?.[key];
    if (value !== undefined) entry[key] = value;
  }
  return entry;
}

function shouldRunTypia(options?: ITransformOptions): boolean {
  return options?.typia !== false;
}

function safeParseTypiaTransform(text: string): ITypiaTransformOutput | null {
  try {
    const parsed = JSON.parse(text) as ITypiaTransformOutput;
    if (
      parsed &&
      typeof parsed === "object" &&
      parsed.typescript &&
      typeof parsed.typescript === "object"
    )
      return parsed;
    return null;
  } catch {
    return null;
  }
}

function joinUnder(root: string, rel: string): string {
  return `${root.replace(/\/+$/, "")}/${rel.replace(/^\/+/, "")}`;
}
