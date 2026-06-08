import { createCommand } from "commander";
import fs from "fs";
import inquirer from "inquirer";
import { createRequire } from "module";
import path from "path";
import {
  type ITtscCompilerDiagnostic,
  type ITtscCompilerTransformation,
  TtscCompiler,
} from "ttsc";

export namespace TypiaGenerateWizard {
  export async function generate(): Promise<void> {
    console.log("----------------------------------------");
    console.log(" Typia Generate Wizard");
    console.log("----------------------------------------");

    const options: IArguments = await parseArguments();
    await build(options);
  }

  async function parseArguments(): Promise<IArguments> {
    const command = createCommand();
    command.argument("[files...]", "input .ts files");
    command.option("--input [path]", "input directory");
    command.option("--output [directory]", "output directory");
    command.option("--project [project]", "tsconfig.json file location");

    const questioned = { value: false };
    const prompt = inquirer.createPromptModule;

    const input = (name: string) => async (message: string) => {
      const result = await prompt()({
        type: "input",
        name,
        message,
        default: "",
      });
      return result[name] as string;
    };
    const select =
      (name: string) =>
      (message: string) =>
      async <Choice extends string>(choices: Choice[]): Promise<Choice> => {
        questioned.value = true;
        return (
          await prompt()({
            type: "list",
            name: name,
            message: message,
            choices: choices,
          })
        )[name];
      };
    const configure = async (): Promise<string> => {
      const files: string[] = await (
        await fs.promises.readdir(process.cwd())
      ).filter(
        (str) =>
          str.substring(0, 8) === "tsconfig" &&
          str.substring(str.length - 5) === ".json",
      );
      if (files.length === 0)
        throw new URIError(`Unable to find "tsconfig.json" file.`);
      else if (files.length === 1) return files[0]!;
      return select("tsconfig")("TS Config File")(files);
    };

    return new Promise<IArguments>((resolve, reject) => {
      command.action(async (files: string[], options: Partial<IArguments>) => {
        try {
          if (files.length !== 0 && options.input !== undefined) {
            throw new URIError(
              "Error on TypiaGenerateWizard.generate(): file arguments cannot be combined with --input.",
            );
          }
          if (files.length === 0) {
            options.input ??= await input("input")("input directory");
          }
          const output: string =
            options.output ?? (await input("output")("output directory"));
          const project: string = options.project ?? (await configure());
          if (questioned.value) console.log("");
          resolve({
            input: options.input,
            output,
            project,
            files,
          });
        } catch (exp) {
          reject(exp);
        }
      });
      command.parseAsync(process.argv.slice(3), { from: "user" }).catch(reject);
    });
  }

  export interface IArguments {
    input?: string;
    output: string;
    project: string;
    files: string[];
  }

  async function build(location: IArguments): Promise<void> {
    location.output = path.resolve(location.output);
    location.project = path.resolve(location.project);

    await ensureOutputDirectory(location.output);

    const entries: IInputFile[] =
      location.files.length === 0
        ? await prepareDirectoryInput(location)
        : await prepareFileInputs(location);

    const binary = resolveTsgoBinary();
    const cwd = path.dirname(location.project);
    const transformed = transformProject({
      binary,
      cwd,
      tsconfig: location.project,
    });
    for (const entry of entries) {
      const output = transformed[projectKey(cwd, entry.file)];
      if (output === undefined) {
        throw new URIError(
          `Error on TypiaGenerateWizard.generate(): no transformed output for ${entry.file}`,
        );
      }
      await fs.promises.mkdir(path.dirname(entry.target), { recursive: true });
      await fs.promises.writeFile(entry.target, formatOutput(output), "utf8");
    }
  }

  interface IInputFile {
    file: string;
    target: string;
  }

  async function ensureOutputDirectory(output: string): Promise<void> {
    if (fs.existsSync(output) === false) {
      await fs.promises.mkdir(output, { recursive: true });
    } else if ((await isDirectory(output)) === false) {
      throw new URIError(
        "Error on TypiaGenerateWizard.generate(): output path is not a directory.",
      );
    }
  }

  async function prepareDirectoryInput(
    location: IArguments,
  ): Promise<IInputFile[]> {
    if (location.input === undefined) {
      throw new URIError(
        "Error on TypiaGenerateWizard.generate(): input path is required.",
      );
    }
    const input = path.resolve(location.input);
    if ((await isDirectory(input)) === false) {
      throw new URIError(
        "Error on TypiaGenerateWizard.generate(): input path is not a directory.",
      );
    }

    const files: string[] = [];
    await gather({
      location: {
        input,
        output: location.output,
      },
      container: files,
      from: input,
      to: location.output,
    });
    return files.map((file) => ({
      file,
      target: path.join(location.output, path.relative(input, file)),
    }));
  }

  async function prepareFileInputs(
    location: IArguments,
  ): Promise<IInputFile[]> {
    const targets: Set<string> = new Set();
    const output: IInputFile[] = [];
    for (const input of location.files) {
      const file: string = path.resolve(input);
      if (fs.existsSync(file) === false || (await isFile(file)) === false) {
        throw new URIError(
          `Error on TypiaGenerateWizard.generate(): input file does not exist: ${input}`,
        );
      } else if (isSupportedExtension(file) === false) {
        throw new URIError(
          `Error on TypiaGenerateWizard.generate(): input file is not a supported TypeScript source: ${input}`,
        );
      }

      const target: string = path.join(location.output, path.basename(file));
      if (targets.has(target)) {
        throw new URIError(
          `Error on TypiaGenerateWizard.generate(): duplicate output filename for ${target}`,
        );
      }
      targets.add(target);
      output.push({ file, target });
    }
    return output;
  }

  function transformProject(props: {
    binary: string;
    cwd: string;
    tsconfig: string;
  }): Record<string, string> {
    const result: ITtscCompilerTransformation = new TtscCompiler({
      binary: props.binary,
      cwd: props.cwd,
      tsconfig: props.tsconfig,
    }).transform();
    if (result.type === "success") {
      return result.typescript;
    }
    if (result.type === "failure") {
      throw new URIError(
        `Error on TypiaGenerateWizard.generate(): ${formatDiagnostics(result.diagnostics)}`,
      );
    }
    throw new URIError(
      `Error on TypiaGenerateWizard.generate(): ${formatUnknownError(result.error)}`,
    );
  }

  function resolveTsgoBinary(): string {
    const explicit: string | undefined = process.env.TTSC_TSGO_BINARY;
    if (explicit !== undefined && explicit.length !== 0) {
      if (path.isAbsolute(explicit) && fs.existsSync(explicit)) {
        return explicit;
      }
      throw new URIError(
        `Error on TypiaGenerateWizard.generate(): TTSC_TSGO_BINARY must be an existing absolute path: ${explicit}`,
      );
    }

    const packageRoot: string = resolveTypiaPackageRoot();
    const manifest: string | null = resolveFromRoots(
      "@typescript/native-preview/package.json",
      [packageRoot, path.resolve(packageRoot, "..", "..")],
    );
    if (manifest === null) {
      throw new URIError(
        "Error on TypiaGenerateWizard.generate(): unable to resolve @typescript/native-preview from the typia package or workspace root.",
      );
    }

    const platform: string = `@typescript/native-preview-${process.platform}-${process.arch}`;
    const platformManifest: string = createRequire(manifest).resolve(
      `${platform}/package.json`,
    );
    const binary: string = path.join(
      path.dirname(platformManifest),
      "lib",
      process.platform === "win32" ? "tsgo.exe" : "tsgo",
    );
    if (fs.existsSync(binary) === false) {
      throw new URIError(
        `Error on TypiaGenerateWizard.generate(): TypeScript-Go executable not found: ${binary}`,
      );
    }
    return binary;
  }

  function resolveTypiaPackageRoot(): string {
    const current: string = path.resolve(__dirname);
    for (const directory of [
      path.resolve(current, "..", ".."),
      path.resolve(current, ".."),
    ]) {
      const file: string = path.join(directory, "package.json");
      if (fs.existsSync(file) === false) {
        continue;
      }
      try {
        const pack = JSON.parse(fs.readFileSync(file, "utf8")) as Partial<
          Record<"name", unknown>
        >;
        if (pack.name === "typia") {
          return directory;
        }
      } catch {
        continue;
      }
    }

    const resolved: string | null = resolveFromRoots("typia/package.json", [
      process.cwd(),
      current,
    ]);
    if (resolved === null) {
      throw new URIError(
        "Error on TypiaGenerateWizard.generate(): unable to resolve typia package root.",
      );
    }
    return path.dirname(resolved);
  }

  function resolveFromRoots(request: string, roots: string[]): string | null {
    for (const root of roots) {
      try {
        return require.resolve(request, { paths: [root] });
      } catch {
        continue;
      }
    }
    return null;
  }

  async function isDirectory(current: string): Promise<boolean> {
    const stat: fs.Stats = await fs.promises.stat(current);
    return stat.isDirectory();
  }

  async function isFile(current: string): Promise<boolean> {
    const stat: fs.Stats = await fs.promises.stat(current);
    return stat.isFile();
  }

  async function gather(props: {
    location: {
      input: string;
      output: string;
    };
    container: string[];
    from: string;
    to: string;
  }): Promise<void> {
    if (props.from === props.location.output) return;
    if (fs.existsSync(props.to) === false) {
      await fs.promises.mkdir(props.to);
    }

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
      }
      if (isSupportedExtension(file)) {
        props.container.push(next);
      }
    }
  }

  function isSupportedExtension(filename: string): boolean {
    return TS_PATTERN.test(filename) && !DTS_PATTERN.test(filename);
  }

  function formatOutput(output: string): string {
    return output.startsWith("// @ts-nocheck")
      ? output
      : `// @ts-nocheck\n${output}`;
  }

  function projectKey(root: string, file: string): string {
    return path.relative(root, file).replace(/\\/g, "/");
  }

  function formatDiagnostics(diagnostics: ITtscCompilerDiagnostic[]): string {
    return diagnostics.length === 0
      ? "transformation failed"
      : diagnostics
          .map((diag) =>
            [
              diag.file ?? "ttsc",
              diag.line === undefined
                ? undefined
                : `${diag.line}:${diag.character ?? 1}`,
              diag.messageText,
            ]
              .filter((part) => part !== undefined && part !== "")
              .join(": "),
          )
          .join("\n");
  }

  function formatUnknownError(error: unknown): string {
    if (error instanceof Error) {
      return error.message;
    }
    if (
      typeof error === "object" &&
      error !== null &&
      "message" in error &&
      typeof error.message === "string"
    ) {
      return error.message;
    }
    return String(error);
  }
}

const TS_PATTERN = /\.[cm]?tsx?$/;
const DTS_PATTERN = /\.d\.[cm]?tsx?$/;
