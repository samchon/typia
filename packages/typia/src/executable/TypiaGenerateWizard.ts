import { createCommand } from "commander";
import fs from "fs";
import inquirer from "inquirer";
import { createRequire } from "module";
import path from "path";
import { glob, isDynamicPattern } from "tinyglobby";
import type {
  ITtscCompilerDiagnostic,
  ITtscCompilerTransformation,
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
    const command = createCommand("typia generate");
    command.usage("[options] [files...]");
    command.argument("[files...]", "input .ts files or globs");
    command.option("--input <path>", "input directory");
    command.option("--output <directory>", "output directory");
    command.option("--project <project>", "tsconfig.json file location");

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
          if (files.length !== 0 && options.output === undefined) {
            throw new URIError(
              "Error on TypiaGenerateWizard.generate(): output directory is required when file arguments are used.",
            );
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
    const outputByKey: Map<string, string> =
      indexTransformedOutputs(transformed);
    const outputs: IOutputFile[] = entries.map((entry) => {
      const output = outputByKey.get(
        projectFileKey(projectKey(cwd, entry.file)),
      );
      if (output === undefined) {
        throw new URIError(
          `Error on TypiaGenerateWizard.generate(): no transformed output for ${entry.file}. Check that --project includes the file.`,
        );
      }
      return { entry, output };
    });

    await ensureOutputDirectory(location.output);
    await ensureTargetDirectories(outputs.map(({ entry }) => entry.target));
    await ensurePhysicalTargets({
      output: location.output,
      entries: outputs.map(({ entry }) => entry),
    });
    await ensureTargetFiles(outputs.map(({ entry }) => entry.target));
    for (const { entry, output } of outputs) {
      await fs.promises.writeFile(entry.target, formatOutput(output), "utf8");
    }
  }

  interface IInputFile {
    file: string;
    target: string;
  }

  interface IOutputFile {
    entry: IInputFile;
    output: string;
  }

  async function ensureOutputDirectory(output: string): Promise<void> {
    if (fs.existsSync(output) === false) {
      await fs.promises.mkdir(output, { recursive: true });
    } else {
      await ensureExistingDirectory({
        label: "output path",
        directory: output,
      });
    }
  }

  async function ensureTargetDirectories(targets: string[]): Promise<void> {
    const directories: Map<string, string> = new Map();
    for (const target of targets) {
      const directory: string = path.dirname(target);
      directories.set(filesystemKey(directory), directory);
    }

    for (const directory of directories.values()) {
      if (fs.existsSync(directory)) {
        await ensureExistingDirectory({
          label: "output parent path",
          directory,
        });
      }
    }
    for (const directory of directories.values()) {
      try {
        await fs.promises.mkdir(directory, { recursive: true });
      } catch (exp) {
        throw new URIError(
          `Error on TypiaGenerateWizard.generate(): unable to create output parent directory ${directory}: ${formatUnknownError(exp)}`,
        );
      }
      await ensureExistingDirectory({
        label: "output parent path",
        directory,
      });
    }
  }

  async function ensureExistingDirectory(props: {
    label: string;
    directory: string;
  }): Promise<void> {
    const stat: fs.Stats = await fs.promises.lstat(props.directory);
    if (stat.isSymbolicLink()) {
      throw new URIError(
        `Error on TypiaGenerateWizard.generate(): ${props.label} is a symbolic link: ${props.directory}`,
      );
    }
    if (stat.isDirectory() === false) {
      throw new URIError(
        `Error on TypiaGenerateWizard.generate(): ${props.label} is not a directory: ${props.directory}`,
      );
    }
  }

  async function ensurePhysicalTargets(props: {
    output: string;
    entries: IInputFile[];
  }): Promise<void> {
    const output: string = await fs.promises.realpath(props.output);
    const inputs: Set<string> = new Set();
    for (const entry of props.entries) {
      inputs.add(filesystemKey(await fs.promises.realpath(entry.file)));
    }

    for (const entry of props.entries) {
      const parent: string = path.dirname(entry.target);
      const directory: string = await fs.promises.realpath(parent);
      if (isSameOrChildPath(directory, output) === false) {
        throw new URIError(
          `Error on TypiaGenerateWizard.generate(): output parent path escapes output directory through a symbolic link: ${parent}`,
        );
      }

      const target: string = path.join(directory, path.basename(entry.target));
      if (inputs.has(filesystemKey(target))) {
        throw new URIError(
          `Error on TypiaGenerateWizard.generate(): output file would overwrite input file through a symbolic link: ${entry.target}`,
        );
      }
    }
  }

  async function ensureTargetFiles(targets: string[]): Promise<void> {
    const files: Map<string, string> = new Map();
    for (const target of targets) {
      files.set(filesystemKey(target), target);
    }

    for (const file of files.values()) {
      let stat: fs.Stats;
      try {
        stat = await fs.promises.lstat(file);
      } catch (exp) {
        if (isMissingFileError(exp)) {
          continue;
        }
        throw new URIError(
          `Error on TypiaGenerateWizard.generate(): unable to inspect output file ${file}: ${formatUnknownError(exp)}`,
        );
      }
      if (stat.isFile() === false) {
        throw new URIError(
          `Error on TypiaGenerateWizard.generate(): output file path is not a regular file: ${file}`,
        );
      }
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
    for (const input of await expandFileInputs(
      location.files,
      location.output,
    )) {
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
      if (isSamePath(file, target)) {
        throw new URIError(
          `Error on TypiaGenerateWizard.generate(): output file would overwrite input file: ${input}`,
        );
      }
      const key: string = filesystemKey(target);
      if (targets.has(key)) {
        throw new URIError(
          `Error on TypiaGenerateWizard.generate(): duplicate output filename for ${target}`,
        );
      }
      targets.add(key);
      output.push({ file, target });
    }
    if (output.length === 0) {
      throw new URIError(
        "Error on TypiaGenerateWizard.generate(): input files do not include any supported TypeScript source files outside the output directory.",
      );
    }
    return output;
  }

  async function expandFileInputs(
    inputs: string[],
    directory: string,
  ): Promise<string[]> {
    const output: string[] = [];
    for (const input of inputs) {
      const pattern: string = toGlobPattern(input);
      if (isDynamicPattern(pattern, { caseSensitiveMatch: true })) {
        const matches: string[] = await glob(pattern, {
          absolute: true,
          caseSensitiveMatch: isCaseSensitive(),
          cwd: process.cwd(),
          onlyFiles: true,
        });
        if (matches.length === 0) {
          throw new URIError(
            `Error on TypiaGenerateWizard.generate(): input pattern does not match any files: ${input}`,
          );
        }
        output.push(
          ...excludeOutputFiles(matches, directory).filter(
            isSupportedExtension,
          ),
        );
      } else {
        const file: string = path.resolve(input);
        if (isSameOrChildPath(file, directory) === false) {
          output.push(file);
        }
      }
    }
    return output;
  }

  function excludeOutputFiles(files: string[], directory: string): string[] {
    return files.filter((file) => isSameOrChildPath(file, directory) === false);
  }

  function toGlobPattern(input: string): string {
    return input.replace(/\\/g, "/");
  }

  function transformProject(props: {
    binary: string;
    cwd: string;
    tsconfig: string;
  }): Record<string, string> {
    const TtscCompiler = loadTtscCompiler();
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

  function loadTtscCompiler(): typeof import("ttsc").TtscCompiler {
    const packageRoot: string = resolveTypiaPackageRoot();
    const resolved: string | null = resolveFromRoots(
      "ttsc",
      resolveRuntimeRoots(packageRoot),
    );
    if (resolved === null) {
      throw new URIError(
        `Error on TypiaGenerateWizard.generate(): unable to resolve ttsc from the current project, typia package, or workspace root. Run "npm i -D ttsc @typescript/native-preview" before.`,
      );
    }
    const imported = createRequire(resolved)(resolved) as typeof import("ttsc");
    return imported.TtscCompiler;
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
      resolveRuntimeRoots(packageRoot),
    );
    if (manifest === null) {
      throw new URIError(
        "Error on TypiaGenerateWizard.generate(): unable to resolve @typescript/native-preview from the current project, typia package, or workspace root.",
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

  function resolveRuntimeRoots(packageRoot: string): string[] {
    return [process.cwd(), packageRoot, path.resolve(packageRoot, "..", "..")];
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
    if (isSamePath(props.from, props.location.output)) return;

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
    const normalized: string = isCaseSensitive()
      ? filename
      : filename.toLowerCase();
    return TS_PATTERN.test(normalized) && !DTS_PATTERN.test(normalized);
  }

  function formatOutput(output: string): string {
    return output.startsWith("// @ts-nocheck")
      ? output
      : `// @ts-nocheck\n${output}`;
  }

  function indexTransformedOutputs(
    outputs: Record<string, string>,
  ): Map<string, string> {
    const map: Map<string, string> = new Map();
    for (const [file, output] of Object.entries(outputs)) {
      map.set(projectFileKey(file), output);
    }
    return map;
  }

  function projectKey(root: string, file: string): string {
    return path.relative(root, file).replace(/\\/g, "/");
  }

  function projectFileKey(file: string): string {
    return isCaseSensitive() ? file : file.toLowerCase();
  }

  function isSamePath(x: string, y: string): boolean {
    return filesystemKey(x) === filesystemKey(y);
  }

  function isSameOrChildPath(file: string, directory: string): boolean {
    const fileKey: string = filesystemKey(path.resolve(file));
    const directoryKey: string = filesystemKey(path.resolve(directory));
    const directoryPrefix: string = directoryKey.endsWith(path.sep)
      ? directoryKey
      : `${directoryKey}${path.sep}`;
    return fileKey === directoryKey || fileKey.startsWith(directoryPrefix);
  }

  function filesystemKey(file: string): string {
    const normalized: string = path.normalize(file);
    return isCaseSensitive() ? normalized : normalized.toLowerCase();
  }

  function isCaseSensitive(): boolean {
    return process.platform !== "win32" && process.platform !== "darwin";
  }

  function isMissingFileError(exp: unknown): boolean {
    return (
      typeof exp === "object" &&
      exp !== null &&
      "code" in exp &&
      exp.code === "ENOENT"
    );
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
