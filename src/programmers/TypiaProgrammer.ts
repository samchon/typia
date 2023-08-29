import fs from "fs";
import path from "path";
import ts from "typescript";

import { ImportTransformer } from "../transformers/ImportTransformer";

import transform from "../transform";

export namespace TypiaProgrammer {
    export interface IProps {
        input: string;
        output: string;
        project: string;
    }

    export const build = async (
        props: TypiaProgrammer.IProps,
    ): Promise<void> => {
        props.input = path.resolve(props.input);
        props.output = path.resolve(props.output);

        if ((await is_directory(props.input)) === false)
            throw new URIError(
                "Error on TypiaGenerator.generate(): input path is not a directory.",
            );
        else if (fs.existsSync(props.output) === false)
            await fs.promises.mkdir(props.output, { recursive: true });
        else if ((await is_directory(props.output)) === false) {
            const parent: string = path.join(props.output, "..");
            if ((await is_directory(parent)) === false)
                throw new URIError(
                    "Error on TypiaGenerator.generate(): output path is not a directory.",
                );
            await fs.promises.mkdir(props.output);
        }

        // CREATE PROGRAM
        const { options: compilerOptions } = ts.parseJsonConfigFileContent(
            ts.readConfigFile(props.project, ts.sys.readFile).config,
            {
                fileExists: ts.sys.fileExists,
                readFile: ts.sys.readFile,
                readDirectory: ts.sys.readDirectory,
                useCaseSensitiveFileNames: ts.sys.useCaseSensitiveFileNames,
            },
            path.dirname(props.project),
        );

        const program: ts.Program = ts.createProgram(
            await (async () => {
                const container: string[] = [];
                await gather(props)(container)(props.input)(props.output);
                return container;
            })(),
            compilerOptions,
        );

        // DO TRANSFORM
        const diagnostics: ts.Diagnostic[] = [];
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
                    ((compilerOptions.plugins as any[]) ?? []).find(
                        (p: any) =>
                            p.transform === "typia/lib/transform" ||
                            p.transform === "../src/transform.ts",
                    ) ?? {},
                    {
                        addDiagnostic: (diag) => diagnostics.push(diag),
                    },
                ),
            ],
            program.getCompilerOptions(),
        );

        // TRACE ERRORS
        for (const diag of diagnostics) {
            const file: string = diag.file
                ? path.relative(diag.file.fileName, process.cwd())
                : "(unknown file)";
            const category: string =
                diag.category === ts.DiagnosticCategory.Warning
                    ? "warning"
                    : diag.category === ts.DiagnosticCategory.Error
                    ? "error"
                    : diag.category === ts.DiagnosticCategory.Suggestion
                    ? "suggestion"
                    : diag.category === ts.DiagnosticCategory.Message
                    ? "message"
                    : "unkown";
            const [line, pos] = diag.file
                ? (() => {
                      const lines: string[] = diag
                          .file!.text.substring(0, diag.start)
                          .split("\n");
                      if (lines.length === 0) return [0, 0];
                      return [lines.length, lines.at(-1)!.length + 1];
                  })()
                : [0, 0];
            console.error(
                `${file}:${line}:${pos} - ${category} TS${diag.code}: ${diag.messageText}`,
            );
        }
        if (diagnostics.length) process.exit(-1);

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
    };

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
        (props: IProps) =>
        (container: string[]) =>
        (from: string) =>
        async (to: string) => {
            if (from === props.output) return;
            else if (fs.existsSync(to) === false) await fs.promises.mkdir(to);

            for (const file of await fs.promises.readdir(from)) {
                const next: string = path.join(from, file);
                const stat: fs.Stats = await fs.promises.stat(next);

                if (stat.isDirectory()) {
                    await gather(props)(container)(next)(path.join(to, file));
                    continue;
                } else if (file.substring(file.length - 3) === ".ts")
                    container.push(next);
            }
        };
}
