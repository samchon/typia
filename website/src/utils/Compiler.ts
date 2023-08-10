import ts from "typescript";
import transform from "typia/lib/transform";

import { RAW } from "../../raw/RAW";

export namespace Compiler {
  export const compile =
    (target: "typescript" | "javascript") =>
    (script: string): IOutput => {
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

      // CREATE PROGRAM
      const program = ts.createProgram(["main.ts"], OPTIONS, {
        // KEY FEATURES
        fileExists: (file) => dict.has(file),
        writeFile: (_file, text) => (output.value = text),
        readFile: (file) =>
          file.startsWith("node_modules/") && file.endsWith("/package.json")
            ? RAW.find((r) => r[0] === `file:///${file}`)![1]
            : undefined,
        getSourceFile: (file: string) => {
          return dict.get(file);
        },

        // ADDITIONAL OPTIONS
        getDefaultLibFileName: () =>
          "node_modules/typescript/lib/lib.es2015.d.ts",
        directoryExists: () => true,
        getCurrentDirectory: () => "",
        getDirectories: () => [],
        getNewLine: () => "\n",
        getCanonicalFileName: (file) => file,
        useCaseSensitiveFileNames: () => false,
      });
      (window as any).checker = program.getTypeChecker();
      (window as any).source = source;

      // TRANSFORMATION
      try {
        if (target === "javascript") {
          program.emit(undefined, undefined, undefined, undefined, {
            before: [transform(program)],
          });
          return { type: "success", content: output.value };
        } else {
          const result: ts.TransformationResult<ts.SourceFile> = ts.transform(
            source,
            [transform(program, {})],
            program.getCompilerOptions(),
          );
          const printer: ts.Printer = ts.createPrinter({
            newLine: ts.NewLineKind.LineFeed,
          });
          return {
            type: "success",
            content: printer.printFile(result.transformed[0]),
          };
        }
      } catch (err: unknown) {
        return { type: "error", error: err as Error };
      }
    };

  export type IOutput = ISuccessOutput | IErrorOutput;
  export interface ISuccessOutput {
    type: "success";
    content: string;
  }
  export interface IErrorOutput {
    type: "error";
    error: Error;
  }

  export const OPTIONS: ts.CompilerOptions = {
    target: ts.ScriptTarget.ES2015,
    module: ts.ModuleKind.CommonJS,
    // lib: ["DOM", "ES2015"],
    esModuleInterop: true,
    downlevelIteration: true,
    forceConsistentCasingInFileNames: true,
    strict: true,
    skipLibCheck: true,
  };
}
