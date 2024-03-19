import { WorkerServer } from "tgrid";
import { ICompilerService } from "./ICompilerService";
import { TypeScriptCompiler } from "./TypeScriptCompiler";
import { RollupBundler } from "./RollupBundler";

const main = async (): Promise<void> => {
  const worker = new WorkerServer();
  const provider: ICompilerService = {
    compile: (target, source) => TypeScriptCompiler.build(target, source),
    bundle: async (source: string) => {
      const res = TypeScriptCompiler.build("javascript", source);
      if (res.success === false) return res;
      try {
        const content: string = await RollupBundler.build(res.content);
        return {
          success: true,
          target: "javascript",
          content,
          diagnostics: res.diagnostics,
        };
      } catch (err) {
        console.log(err);
        return {
          success: false,
          error: err as Error,
        };
      }
    },
  };
  await worker.open(provider);
};
main();
