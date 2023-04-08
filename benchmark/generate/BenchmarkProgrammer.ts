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
            (p.library === "class-transformer" ||
                p.library === "class-validator") &&
            p.feature === "UltimateUnion",
    ): Promise<void> {
        for (const library of category.libraries) {
            const location: string = [
                __dirname,
                "..",
                "programs",
                directory(category.name),
                library.name,
            ].join("/");
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
                    category.name,
                    library.name,
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
}

const directory = (name: string) => name.split("-").join("").toLowerCase();
