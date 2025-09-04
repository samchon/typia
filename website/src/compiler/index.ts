import {
  EmbedTypeScript,
  IEmbedTypeScriptResult,
  IEmbedTypeScriptTransformation,
} from "embed-typescript";
import { WorkerServer } from "tgrid";
import typiaTransform from "typia/lib/transform";

import { COMPILER_OPTIONS } from "./COMPILER_OPTIONS";
import { ICompilerService } from "./ICompilerService";
import external from "../raw/external.json";
import { RollupBundler } from "./RollupBundler";
import ts from "typescript";

const main = async (): Promise<void> => {
  const worker = new WorkerServer();
  const provider: ICompilerService = {
    compile: async (
      props: ICompilerService.IProps,
    ): Promise<ICompilerService.IResult> => {
      const compiler: EmbedTypeScript = new EmbedTypeScript({
        external: external as Record<string, string>,
        compilerOptions: COMPILER_OPTIONS,
        transformers: (program, diagnostics) => ({
          before: [
            typiaTransform(program, props.options ?? {}, {
              addDiagnostic: (input) => diagnostics.push(input),
            }),
          ],
        }),
      });
      const result: IEmbedTypeScriptResult = compiler.compile({
        "src/index.ts": props.source,
      });
      return result.type === "success"
        ? {
            type: "success",
            target: "javascript",
            value: result.javascript["src/index.js"],
          }
        : result.type === "failure"
          ? {
              type: "failure",
              target: "javascript",
              value: result.javascript["src/index.js"],
              diagnostics: result.diagnostics,
            }
          : {
              type: "error",
              target: "javascript",
              value: result.error,
            };
    },
    transform: async (
      props: ICompilerService.IProps,
    ): Promise<ICompilerService.IResult> => {
      const compiler: EmbedTypeScript = new EmbedTypeScript({
        external: external as Record<string, string>,
        compilerOptions: COMPILER_OPTIONS,
        transformers: (program, diagnostics) => ({
          before: [
            typiaTransform(program, props.options ?? {}, {
              addDiagnostic: (input) => diagnostics.push(input),
            }) satisfies ts.TransformerFactory<ts.SourceFile>,
          ],
        }),
      });
      const result: IEmbedTypeScriptTransformation = compiler.transform({
        "src/index.ts": props.source,
      });
      return result.type === "success"
        ? {
            type: "success",
            target: "typescript",
            value: result.typescript["src/index.ts"],
          }
        : result.type === "failure"
          ? {
              type: "failure",
              target: "typescript",
              value: result.typescript["src/index.ts"],
              diagnostics: result.diagnostics,
            }
          : {
              type: "error",
              target: "typescript",
              value: result.error,
            };
    },
    bundle: async (
      props: ICompilerService.IProps,
    ): Promise<ICompilerService.IResult> => {
      const result: ICompilerService.IResult = await provider.compile(props);
      if (result.type !== "success") return result;
      try {
        const value: string = await RollupBundler.build(result.value);
        return {
          type: "success",
          target: "javascript",
          value,
        };
      } catch (error) {
        return {
          type: "error",
          target: "javascript",
          value:
            error instanceof Error
              ? {
                  ...error,
                  name: error.name,
                  message: error.message,
                  stack: error.stack,
                }
              : (error as object),
        };
      }
    },
  };
  await worker.open(provider);
};
main();
