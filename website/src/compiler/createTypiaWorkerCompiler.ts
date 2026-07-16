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

interface ITypiaTransformDiagnostic {
  file?: string | null;
  category: "error" | "warning";
  code: number | string;
  start?: number;
  length?: number;
  line?: number;
  character?: number;
  messageText: string;
}

interface ITypiaTransformOutput {
  diagnostics: ITypiaTransformDiagnostic[];
  typescript: Record<string, string>;
}

interface ITypiaBuildPipelineProps {
  api: Pick<IBootResult["api"], "build" | "plugin">;
  host: Pick<IBootResult["host"], "writeFile">;
  source: string;
  runTypia: boolean;
  workDir: string;
  tsconfigPath: string;
  entryFile: string;
  typiaPluginName: string;
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
      return runTypiaBuildPipeline({
        api,
        host,
        source,
        runTypia: runTypia && typiaPlugin !== null,
        workDir,
        tsconfigPath,
        entryFile,
        typiaPluginName,
      });
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

export async function runTypiaBuildPipeline(
  props: ITypiaBuildPipelineProps,
): Promise<ICompilerService.IResult> {
  try {
    let transformDiagnostics: ICompilerService.IDiagnostic[] = [];
    if (props.runTypia) {
      const transformed = await applyTypiaTransform(props);
      if (!transformed.success) return transformed.result;
      transformDiagnostics = transformed.diagnostics;
    }

    const raw = await props.api.build({
      cwd: props.workDir,
      tsconfig: props.tsconfigPath,
    });
    if (raw.code !== 0 && !raw.result) {
      return runtimeError(
        raw.stderr || "ttsc: build failed without a result payload",
        "typescript-build",
      );
    }
    const parsed = parseResult<ITtscCompileResult>(raw);
    if (!parsed)
      return runtimeError(
        "ttsc: result JSON could not be parsed",
        "typescript-build",
      );

    const diagnostics = [
      ...transformDiagnostics,
      ...(parsed.diagnostics ?? []).map((diagnostic) =>
        mapDiagnostic(diagnostic, props.source),
      ),
    ];
    const js = pickEmittedJS(parsed.output ?? {}, props.entryFile) ?? "";
    // Warnings do not block emission. They use the diagnostic-bearing result
    // variant so the playground can display them beside the successful output.
    if (diagnostics.length > 0)
      return {
        type: "failure",
        target: "javascript",
        value: js,
        diagnostics,
      };
    return { type: "success", target: "javascript", value: js };
  } catch (error) {
    return {
      type: "error",
      target: "javascript",
      value: normalizeError(error),
    };
  }
}

async function applyTypiaTransform(
  props: ITypiaBuildPipelineProps,
): Promise<
  | { success: true; diagnostics: ICompilerService.IDiagnostic[] }
  | { success: false; result: ICompilerService.IResult }
> {
  const raw = await props.api.plugin({
    name: props.typiaPluginName,
    command: "transform",
    cwd: props.workDir,
    tsconfig: props.tsconfigPath,
    output: "ts",
  });
  if (raw.stdout.trim().length === 0) {
    const message =
      raw.stderr.trim() ||
      (raw.code !== 0
        ? `typia transform exited with code ${raw.code}`
        : "typia transform returned empty stdout");
    return { success: false, result: runtimeError(message) };
  }

  const parsed = safeParseTypiaTransform(raw.stdout);
  if (parsed.success) {
    const entryFile = normalizeRelativePath(props.entryFile);
    if (
      entryFile === null ||
      !Object.hasOwn(parsed.value.typescript, entryFile)
    )
      return {
        success: false,
        result: runtimeError(
          "typia transform payload does not contain the entry file",
        ),
      };
    const diagnostics = parsed.value.diagnostics.map((diagnostic) =>
      mapTypiaTransformDiagnostic(diagnostic),
    );
    if (diagnostics.some((diagnostic) => diagnostic.severity === "error"))
      return {
        success: false,
        result: {
          type: "failure",
          target: "javascript",
          value: "",
          diagnostics,
        },
      };
    if (raw.code !== 0)
      return {
        success: false,
        result: runtimeError(
          raw.stderr.trim() || `typia transform exited with code ${raw.code}`,
        ),
      };
    if (raw.stderr.trim().length !== 0)
      return { success: false, result: runtimeError(raw.stderr.trim()) };

    for (const [relativePath, text] of Object.entries(parsed.value.typescript))
      props.host.writeFile(joinUnder(props.workDir, relativePath), text);
    return { success: true, diagnostics };
  }

  if (raw.code !== 0)
    return {
      success: false,
      result: runtimeError(
        raw.stderr.trim() || `typia transform exited with code ${raw.code}`,
      ),
    };
  if (raw.stderr.trim().length !== 0)
    return { success: false, result: runtimeError(raw.stderr.trim()) };
  return { success: false, result: runtimeError(parsed.message) };
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

function safeParseTypiaTransform(
  text: string,
):
  | { success: true; value: ITypiaTransformOutput }
  | { success: false; message: string } {
  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    return {
      success: false,
      message: "typia transform stdout is not valid JSON",
    };
  }
  if (!isRecord(parsed) || !isRecord(parsed.typescript))
    return {
      success: false,
      message: "typia transform payload must include a TypeScript map",
    };

  const typescript: Record<string, string> = Object.create(null);
  for (const [relativePath, value] of Object.entries(parsed.typescript)) {
    const normalized = normalizeRelativePath(relativePath);
    if (normalized === null || typeof value !== "string")
      return {
        success: false,
        message:
          "typia transform payload must use relative TypeScript paths with string contents",
      };
    if (Object.hasOwn(typescript, normalized))
      return {
        success: false,
        message: "typia transform payload contains duplicate TypeScript paths",
      };
    typescript[normalized] = value;
  }

  const rawDiagnostics = parsed.diagnostics ?? [];
  if (
    !Array.isArray(rawDiagnostics) ||
    !rawDiagnostics.every(isTypiaTransformDiagnostic)
  )
    return {
      success: false,
      message: "typia transform payload contains malformed diagnostics",
    };
  return {
    success: true,
    value: { diagnostics: rawDiagnostics, typescript },
  };
}

function isTypiaTransformDiagnostic(
  value: unknown,
): value is ITypiaTransformDiagnostic {
  if (!isRecord(value)) return false;
  return (
    (value.category === "error" || value.category === "warning") &&
    (typeof value.code === "number" || typeof value.code === "string") &&
    typeof value.messageText === "string" &&
    (value.file === undefined ||
      value.file === null ||
      typeof value.file === "string") &&
    isOptionalPositiveInteger(value.line) &&
    isOptionalPositiveInteger(value.character) &&
    isOptionalNonNegativeInteger(value.start) &&
    isOptionalPositiveInteger(value.length)
  );
}

function mapTypiaTransformDiagnostic(
  diagnostic: ITypiaTransformDiagnostic,
): ICompilerService.IDiagnostic {
  return {
    line: diagnostic.line ?? 1,
    column: diagnostic.character ?? 1,
    length: diagnostic.length ?? 1,
    severity: diagnostic.category,
    message: diagnostic.messageText,
    code:
      typeof diagnostic.code === "number"
        ? `TS${diagnostic.code}`
        : diagnostic.code,
  };
}

function runtimeError(
  message: string,
  stage = "typia-transform",
): ICompilerService.IError {
  return {
    type: "error",
    target: "javascript",
    value: { name: "CompilerPipelineError", stage, message },
  };
}

function normalizeRelativePath(path: string): string | null {
  const normalized = path.replace(/\\/g, "/");
  if (
    normalized.length === 0 ||
    normalized.startsWith("/") ||
    /^[A-Za-z]:\//.test(normalized) ||
    normalized.includes("\0") ||
    normalized.split("/").includes("..")
  )
    return null;
  return normalized;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function isOptionalPositiveInteger(value: unknown): boolean {
  return value === undefined || (Number.isInteger(value) && Number(value) > 0);
}

function isOptionalNonNegativeInteger(value: unknown): boolean {
  return value === undefined || (Number.isInteger(value) && Number(value) >= 0);
}

function joinUnder(root: string, rel: string): string {
  return `${root.replace(/\/+$/, "")}/${rel.replace(/^\/+/, "")}`;
}
