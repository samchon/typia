import { RollupBuild, rollup } from "@rollup/browser";
import { VariadicSingleton } from "tstl";

export namespace RollupBundler {
  export const build = async (script: string): Promise<string> => {
    const modules: Record<string, string> = {
      "./src/index.js": script,
    };
    const builder: RollupBuild = await rollup({
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
            return esm.get(id);
          },
        },
      ],
    });

    const { output } = await builder.generate({
      format: "cjs",
    });
    const bundled: string | undefined = output[0]?.code;
    if (!bundled?.length) throw new Error("Failed to bundle.");
    return bundled;
  };
}

const esm = new VariadicSingleton(async (url: string) => {
  const response: Response = await fetch(url);
  const text: string = await response.text();
  return text;
});
