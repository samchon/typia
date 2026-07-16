import fs from "fs";

export namespace BenchmarkProgrammer {
  export interface ICategory {
    name: string;
    libraries: ILibrary[];
    features: string[];
  }
  export interface ILibrary {
    name: string;
    body: (input: string) => string;
  }

  export async function generate(
    category: ICategory,
    filter: (p: { library: string; feature: string }) => boolean = (p) =>
      (p.library === "class-transformer" || p.library === "class-validator") &&
      p.feature === "UltimateUnion",
  ): Promise<void> {
    const root: string = [
      __dirname,
      "..",
      "programs",
      emend(category.name),
    ].join("/");
    await fs.promises.mkdir(root, { recursive: true });

    const libraries: Set<string> = new Set(
      category.libraries.map((library) => emend(library.name)),
    );
    for (const entry of await fs.promises.readdir(root, {
      withFileTypes: true,
    }))
      if (
        entry.isDirectory() &&
        entry.name !== "internal" &&
        libraries.has(entry.name) === false
      )
        await fs.promises.rm(`${root}/${entry.name}`, {
          recursive: true,
          force: true,
        });

    for (const library of category.libraries) {
      const location: string = `${root}/${emend(library.name)}`;
      await fs.promises.mkdir(location, { recursive: true });
      for (const file of await fs.promises.readdir(location))
        if (!file.includes("create"))
          await fs.promises.rm(`${location}/${file}`);

      for (const feature of category.features) {
        if (
          filter({
            feature,
            library: library.name,
          })
        )
          continue;

        const file: string = [
          "benchmark",
          emend(category.name.split("/")[0]),
          emend(library.name),
          feature,
        ].join("-");

        await fs.promises.writeFile(
          `${location}/${file}.ts`,
          library.body(feature),
          "utf8",
        );
      }
    }
  }

  export const emend = (name: string) =>
    name
      .replace("(", "")
      .replaceAll(")", "")
      .replaceAll(" ", "-")
      .toLowerCase();
  export const pascal = (name: string) =>
    name
      .split("-")
      .map((str) => str[0].toUpperCase() + str.slice(1))
      .join("");
}
