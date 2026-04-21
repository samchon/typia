import * as path from "node:path";

import ts from "typescript";

interface LegacyBuildOptions {
  emitDir: string;
  tsconfig: string;
}

type TypiaTransform = (
  program: ts.Program,
  options: Record<string, unknown>,
  extras: { addDiagnostic(diag: ts.Diagnostic): void },
) => ts.TransformerFactory<ts.SourceFile>;

export function buildLegacyProject(options: LegacyBuildOptions): void {
  const config = ts.readConfigFile(options.tsconfig, ts.sys.readFile);
  if (config.error) {
    throw new Error(formatDiagnostics([config.error]));
  }

  const parsed = ts.parseJsonConfigFileContent(
    config.config,
    {
      fileExists: ts.sys.fileExists,
      readFile: ts.sys.readFile,
      readDirectory: ts.sys.readDirectory,
      useCaseSensitiveFileNames: ts.sys.useCaseSensitiveFileNames,
    },
    path.dirname(options.tsconfig),
    {
      noEmit: false,
      noEmitOnError: false,
      emitDeclarationOnly: false,
      outDir: options.emitDir,
    },
    options.tsconfig,
  );
  const program = ts.createProgram(parsed.fileNames, parsed.options);
  const diagnostics: ts.Diagnostic[] = [];
  const typiaTransform = resolveTypiaTransform();
  const plugin =
    ((parsed.options.plugins as Record<string, unknown>[] | undefined) ?? []).find(
      (entry) => entry?.transform === "typia/lib/transform",
    ) ?? {};
  const emitted = program.emit(undefined, undefined, undefined, false, {
    before: [
      typiaTransform(program, plugin, {
        addDiagnostic: (diag: ts.Diagnostic) => diagnostics.push(diag),
      }),
    ],
  });
  const merged = [
    ...ts.getPreEmitDiagnostics(program),
    ...diagnostics,
    ...emitted.diagnostics,
  ];
  const errors = merged.filter(
    (diag) => diag.category === ts.DiagnosticCategory.Error,
  );
  if (emitted.emitSkipped || errors.length !== 0) {
    throw new Error(formatDiagnostics(errors.length !== 0 ? errors : merged));
  }
}

function formatDiagnostics(diagnostics: readonly ts.Diagnostic[]): string {
  if (diagnostics.length === 0) {
    return "ttsx: legacy TypeScript fallback failed without diagnostics";
  }
  return ts.formatDiagnosticsWithColorAndContext(diagnostics, {
    getCanonicalFileName: (file) => file,
    getCurrentDirectory: () => process.cwd(),
    getNewLine: () => ts.sys.newLine,
  });
}

function resolveTypiaTransform(): TypiaTransform {
  const candidates = [
    path.resolve(__dirname, "../../transform/src/transform.ts"),
    path.resolve(__dirname, "../../transform/lib/index.js"),
    "@typia/transform",
  ];
  const causes: string[] = [];
  for (const candidate of candidates) {
    try {
      const loaded = require(candidate) as {
        default?: TypiaTransform;
        transform?: TypiaTransform;
      };
      const transformer = loaded.transform ?? loaded.default;
      if (transformer) return transformer;
      causes.push(`${candidate}: missing transform export`);
    } catch (error) {
      causes.push(
        `${candidate}: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }
  throw new Error(
    [
      "ttsx: unable to resolve @typia/transform for legacy compatibility build",
      ...causes,
    ].join("\n"),
  );
}
