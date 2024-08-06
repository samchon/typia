import ts from "typescript";
import transform from "typia/lib/transform";

import { RAW } from "../../raw/RAW";
import { ICompilerService } from "./ICompilerService";
import { COMPILER_OPTIONS } from "./COMPILER_OPTIONS";

export namespace TypeScriptCompiler {
  export const build = (
    target: "typescript" | "javascript",
    script: string,
  ): ICompilerService.IOutput => {
    //----
    // PREPARE SOURCE FILES
    //----
    const dict: Map<string, ts.SourceFile> = new Map();

    // TYPIA DEFINITIONS
    for (const [file, content] of RAW) {
      if (file.endsWith("packageJson.d.ts")) continue;
      const replaced: string = file.replace("file:///", "");
      const source: ts.SourceFile = ts.createSourceFile(
        file,
        content,
        ts.ScriptTarget.ES2015,
      );
      dict.set(replaced, source);
    }

    // THE MAIN SOURCE FILE
    const source: ts.SourceFile = ts.createSourceFile(
      "main.ts",
      script,
      ts.ScriptTarget.ES2015,
    );
    dict.set("main.ts", source);

    //----
    // COMPILATION
    //----
    const output = { value: "" };
    const diagnostics: ts.Diagnostic[] = [];

    // CREATE PROGRAM
    const program = ts.createProgram(["main.ts"], COMPILER_OPTIONS, {
      // KEY FEATURES
      fileExists: (file) => dict.has(file),
      writeFile: (_file, text) => (output.value = text),
      readFile: (file) =>
        file.startsWith("node_modules/") && file.endsWith("/package.json")
          ? RAW.find((r) => r[0] === `file:///${file}`)![1]
          : undefined,
      getSourceFile: (file: string) => dict.get(file),

      // ADDITIONAL OPTIONS
      getDefaultLibFileName: () =>
        "node_modules/typescript/lib/lib.es2015.d.ts",
      directoryExists: () => true,
      getCurrentDirectory: () => "",
      getDirectories: () => [],
      getNewLine: () => "\n",
      getCanonicalFileName: (file) => file,
      useCaseSensitiveFileNames: () => false,
      jsDocParsingMode: ts.JSDocParsingMode.ParseAll,
    });
    (self as any).checker = program.getTypeChecker();
    (self as any).source = source;

    // TRANSFORMATION
    try {
      if (target === "javascript") {
        program.emit(undefined, undefined, undefined, undefined, {
          before: [
            transform(
              program,
              {},
              { addDiagnostic: (input) => diagnostics.push(input) },
            ),
          ],
        });
        return {
          success: true,
          target,
          content: output.value,
          diagnostics: diagnostics as any,
        };
      } else {
        const result: ts.TransformationResult<ts.SourceFile> = ts.transform(
          source,
          [
            transform(
              program,
              {},
              { addDiagnostic: (input) => diagnostics.push(input) },
            ),
          ],
          program.getCompilerOptions(),
        );
        const printer: ts.Printer = ts.createPrinter({
          newLine: ts.NewLineKind.LineFeed,
        });
        return {
          success: true,
          target,
          content: printer.printFile(result.transformed[0]),
          diagnostics: diagnostics as any,
        };
      }
    } catch (err: unknown) {
      return { success: false, error: err as Error };
    }
  };
}
