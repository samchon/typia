import { RollupBuild, rollup } from "@rollup/browser";
import { VariadicSingleton } from "tstl";

export namespace TypeScriptBundler {
  interface IConsole {
    error: (...args: any[]) => any;
    log: (...args: any[]) => any;
    warn: (...args: any[]) => any;
  }
  export const builder =
    (console: IConsole) =>
    async (script: string): Promise<void> => {
      const modules: Record<string, string> = {
        "./src/index.js": script,
      };

      const builder: RollupBuild = await rollup({
        input: "./src/index.js",
        plugins: [
          {
            name: "virtual",
            resolveId(id) {
              console.log(id);
              if (id in modules) return id;
              return new URL(id, "https://esm.sh").href;
            },
            load(id) {
              if (id in modules) return modules[id];
              return esm.get(id);
            },
          },
        ],
      });

      const { output } = await builder.generate({ format: "cjs" });
      const bundled: string | undefined = output[0]?.code;
      if (!bundled?.length) return;

      try {
        new Function("console", bundled)(console);
      } catch (err) {
        if (err instanceof Error) console.error(err.message);
      }
    };
}

const esm = new VariadicSingleton(async (url: string) => {
  const response: Response = await fetch(url);
  const text: string = await response.text();
  return text;
});
