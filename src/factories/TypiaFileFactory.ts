import fs from "fs";
import path from "path";
import ts from "typescript";

import { ImportTransformer } from "../transformers/ImportTransformer";

import transform from "../transform";

export namespace TypiaFileFactory {
    export interface IProps {
        input: string;
        output: string;
        project: string;
    }

    export async function generate(
        props: TypiaFileFactory.IProps,
    ): Promise<void> {
        props.input = path.resolve(props.input);
        props.output = path.resolve(props.output);

        if ((await is_directory(props.input)) === false)
            throw new Error(
                "Error on TypiaGenerator.generate(): input path is not a directory.",
            );
        else if (fs.existsSync(props.output) === false)
            await fs.promises.mkdir(props.output, { recursive: true });
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
            await (async () => {
                const container: string[] = [];
                await gather(container)(props.input)(props.output);
                return container;
            })(),
            config.compilerOptions,
        );

        // DO TRANSFORM
        const result: ts.TransformationResult<ts.SourceFile> = ts.transform(
            program
                .getSourceFiles()
                .filter(
                    (file) =>
                        !file.isDeclarationFile &&
                        path.resolve(file.fileName).indexOf(props.input) !== -1,
                ),
            [
                ImportTransformer.transform(props.input)(props.output),
                transform(
                    program,
                    (config.compilerOptions.plugins ?? []).find(
                        (p: any) =>
                            p.transform === "typia/lib/transform" ||
                            p.transform === "../src/transform.ts",
                    ) ?? {},
                ),
            ],
            program.getCompilerOptions(),
        );

        // ARCHIVE TRANSFORMED FILES
        const printer: ts.Printer = ts.createPrinter({
            newLine: ts.NewLineKind.LineFeed,
        });
        for (const file of result.transformed) {
            const to: string = path
                .resolve(file.fileName)
                .replace(props.input, props.output);

            const content: string = printer.printFile(file);
            await fs.promises.writeFile(to, emend(content), "utf8");
        }
    }

    const emend = (content: string): string => {
        if (
            content.indexOf("typia.") === -1 ||
            content.indexOf("import typia") !== -1 ||
            content.indexOf("import * as typia") !== -1
        )
            return content;
        return `import typia from "typia";\n\n${content}`;
    };

    const is_directory = async (current: string): Promise<boolean> => {
        const stat: fs.Stats = await fs.promises.stat(current);
        return stat.isDirectory();
    };

    const gather =
        (container: string[]) => (from: string) => async (to: string) => {
            if (fs.existsSync(to) === false) await fs.promises.mkdir(to);
            const directory: string[] = await fs.promises.readdir(from);
            for (const file of directory) {
                const next: string = path.join(from, file);
                const stat: fs.Stats = await fs.promises.stat(next);

                if (stat.isDirectory()) {
                    await gather(container)(next)(path.join(to, file));
                    continue;
                } else if (file.substring(file.length - 3) === ".ts")
                    container.push(next);
            }
            return container;
        };
}
