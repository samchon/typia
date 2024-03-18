import * as rollup from "@rollup/browser";

export namespace Executor {
  interface IConsole {
    error: (...args: any[]) => any;
    log: (...args: any[]) => any;
    warn: (...args: any[]) => any;
  }
  export const execute =
    (console: IConsole) =>
    async (script: string): Promise<void> => {
      const modules: Record<string, string> = {
        "./src/index.js": script,
      };

      const builder = await rollup.rollup({
        input: "./src/index.js",
        plugins: [
          {
            name: "virtual",
            resolveId(id) {
              if (id in modules) return id;
              return new URL(id, "https://esm.sh").href;
            },
            load(id) {
              if (id in modules) return modules[id];
              return fetch(id).then((res) => res.text());
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
