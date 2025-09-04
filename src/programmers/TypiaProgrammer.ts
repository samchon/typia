import fs from "fs";
import path from "path";
import ts from "typescript";

import { ImportTransformer } from "../transformers/ImportTransformer";

import transform from "../transform";

export namespace TypiaProgrammer {
  export interface ILocation {
    input: string;
    output: string;
    project: string;
  }

  export const build = async (
    location: TypiaProgrammer.ILocation,
  ): Promise<void> => {
    location.input = path.resolve(location.input);
    location.output = path.resolve(location.output);

    if ((await is_directory(location.input)) === false)
      throw new URIError(
        "Error on TypiaGenerator.generate(): input path is not a directory.",
      );
    else if (fs.existsSync(location.output) === false)
      await fs.promises.mkdir(location.output, { recursive: true });
    else if ((await is_directory(location.output)) === false) {
      const parent: string = path.join(location.output, "..");
      if ((await is_directory(parent)) === false)
        throw new URIError(
          "Error on TypiaGenerator.generate(): output path is not a directory.",
        );
      await fs.promises.mkdir(location.output);
    }

    // CREATE PROGRAM
    const { options: compilerOptions } = ts.parseJsonConfigFileContent(
      ts.readConfigFile(location.project, ts.sys.readFile).config,
      {
        fileExists: ts.sys.fileExists,
        readFile: ts.sys.readFile,
        readDirectory: ts.sys.readDirectory,
        useCaseSensitiveFileNames: ts.sys.useCaseSensitiveFileNames,
      },
      path.dirname(location.project),
    );

    const program: ts.Program = ts.createProgram(
      await (async () => {
        const container: string[] = [];
        await gather({
          location,
          container,
          from: location.input,
          to: location.output,
        });
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
            path.resolve(file.fileName).indexOf(location.input) !== -1,
        ),
      [
        ImportTransformer.transform({
          from: location.input,
          to: location.output,
        }),
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
                : "unknown";
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
        .replace(location.input, location.output);

      const content: string = printer.printFile(file);
      await fs.promises.writeFile(to, content, "utf8");
    }
  };

  const is_directory = async (current: string): Promise<boolean> => {
    const stat: fs.Stats = await fs.promises.stat(current);
    return stat.isDirectory();
  };

  const gather = async (props: {
    location: ILocation;
    container: string[];
    from: string;
    to: string;
  }) => {
    if (props.from === props.location.output) return;
    else if (fs.existsSync(props.to) === false)
      await fs.promises.mkdir(props.to);

    for (const file of await fs.promises.readdir(props.from)) {
      const next: string = path.join(props.from, file);
      const stat: fs.Stats = await fs.promises.stat(next);

      if (stat.isDirectory()) {
        await gather({
          location: props.location,
          container: props.container,
          from: next,
          to: path.join(props.to, file),
        });
        continue;
      } else if (is_supported_extension(file)) props.container.push(next);
    }
  };

  const is_supported_extension = (filename: string): boolean => {
    // avoid using look-behind assertion as it is not marked as Baseline Widely Available
    return TS_PATTERN.test(filename) && !DTS_PATTERN.test(filename);
  };
}

const TS_PATTERN = /\.[cm]?tsx?$/;
const DTS_PATTERN = /\.d\.[cm]?tsx?$/;
