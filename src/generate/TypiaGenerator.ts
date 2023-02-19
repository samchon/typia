import fs from "fs";
import path from "path";
import ts from "typescript";

import transform from "../transform";

export namespace TypiaGenerator {
    export interface IProps {
        input: string;
        output: string;
        project: string;
    }

    export async function generate(
        props: TypiaGenerator.IProps,
    ): Promise<void> {
        props.input = path.resolve(props.input);
        props.output = path.resolve(props.output);

        if ((await is_directory(props.input)) === false)
            throw new Error(
                "Error on TypiaGenerator.generate(): input path is not a directory.",
            );
        else if ((await is_directory(props.output)) === false) {
            const parent: string = path.join(props.output, "..");
            if ((await is_directory(parent)) === false)
                throw new Error(
                    "Error on TypiaGenerator.generate(): output path is not a directory.",
                );
            await fs.promises.mkdir(props.output);
        }

        // CREATE PROGRAM
        const { config } = ts.readConfigFile(props.project, ts.sys.readFile);

        const program: ts.Program = ts.createProgram(
            await gather(
                await (async () => {
                    const container: string[] = [];
                    await gather(container)(props.input);
                    return container;
                })(),
            )(props.input),
            config,
        );

        // DO TRANSFORM
        // const others = await get_other_transformers(config);
        const result: ts.TransformationResult<ts.SourceFile> = ts.transform(
            program
                .getSourceFiles()
                .filter(
                    (file) =>
                        !file.isDeclarationFile &&
                        path.resolve(file.fileName).indexOf(props.input) !== -1,
                ),
            [
                // ...others.map((o) => o(program)),
                transform(program),
            ],
            program.getCompilerOptions(),
        );

        // ARCHIVE TRANSFORMED FILES
        const printer: ts.Printer = ts.createPrinter();
        for (const file of result.transformed) {
            const to: string = path
                .resolve(file.fileName)
                .replace(props.input, props.output);
            const content: string = printer.printFile(file);

            await fs.promises.writeFile(to, content, "utf8");
        }
    }

    // const get_other_transformers = async (
    //     config: any,
    // ): Promise<
    //     Array<(program: ts.Program) => ts.TransformerFactory<ts.SourceFile>>
    // > => {
    //     if (
    //         typeof config.compilerOptions !== "object" ||
    //         !Array.isArray(config.compilerOptions?.plugins)
    //     )
    //         return [];

    //     const plugins: string[] = config.compilerOptions.plugins
    //         .filter(
    //             (p: any) =>
    //                 typeof p === "object" && typeof p?.transform === "string",
    //         )
    //         .map((p: any) => p.transform)
    //         .filter(
    //             (str: string) =>
    //                 str.indexOf("typia/lib/transform") === -1 &&
    //                 str.indexOf("./src/transform.ts") === -1,
    //         );

    //     return Promise.all(
    //         plugins.map(async (path: string) => {
    //             const module: any = await import(path);
    //             return module.default;
    //         }),
    //     );
    // };

    const is_directory = async (current: string): Promise<boolean> => {
        const stat: fs.Stats = await fs.promises.stat(current);
        return stat.isDirectory();
    };

    const gather = (container: string[]) => async (current: string) => {
        const directory: string[] = await fs.promises.readdir(current);
        for (const file of directory) {
            const next: string = path.join(current, file);
            const stat: fs.Stats = await fs.promises.stat(next);

            if (stat.isDirectory()) {
                await gather(container)(next);
                continue;
            } else if (file.substring(file.length - 3) === ".ts")
                container.push(next);
        }
        return container;
    };
}
