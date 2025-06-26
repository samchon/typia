import { RollupBuild, rollup } from "@rollup/browser";
import { VariadicSingleton } from "tstl";
import lock from "../../package-lock.json";

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
  const response: Response = await fetch(reformUrl(url));
  const text: string = await response.text();
  return text;
});

const reformUrl = (url: string): string => {
  const elements: string[] = url.split("https://esm.sh/")[1].split("/");
  if (elements.length === 0) return url;
  else if (elements[0].indexOf("@") > 0) return url;

  const library: string = elements[0].startsWith("@")
    ? `${elements[0]}/${elements[1]}`
    : elements[0];
  const version: string | undefined =
    lock.packages[`node_modules/${library}` as "node_modules/typia"]?.version;
  if (version === undefined) return url;

  const path: string = [
    `${library}@${version}`,
    ...elements.slice(library.startsWith("@") ? 2 : 1),
  ].join("/");
  return `https://esm.sh/${path}`;
};
