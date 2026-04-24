import { transform } from "@typia/ttsc";
import fs from "fs";
import path from "path";

import { ArgumentParser } from "./setup/ArgumentParser";
import { PackageManager } from "./setup/PackageManager";

export namespace TypiaGenerateWizard {
  export async function generate(): Promise<void> {
    console.log("----------------------------------------");
    console.log(" Typia Generate Wizard");
    console.log("----------------------------------------");

    // LOAD PACKAGE.JSON INFO
    const pack: PackageManager = await PackageManager.mount();
    const options: IArguments = await ArgumentParser.parse(pack, inquiry);
    await build(options);
  }

  const inquiry: ArgumentParser.Inquiry<IArguments> = async (
    _pack,
    command,
    prompt,
    action,
  ) => {
    // PREPARE ASSETS
    command.option("--input [path]", "input directory");
    command.option("--output [directory]", "output directory");
    command.option("--project [project]", "tsconfig.json file location");

    const questioned = { value: false };

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

    return action(async (options) => {
      options.input ??= await input("input")("input directory");
      options.output ??= await input("output")("output directory");
      options.project ??= await configure();
      return options as IArguments;
    });
  };

  export interface IArguments {
    input: string;
    output: string;
    project: string;
  }

  async function build(location: IArguments): Promise<void> {
    location.input = path.resolve(location.input);
    location.output = path.resolve(location.output);
    location.project = path.resolve(location.project);

    if ((await isDirectory(location.input)) === false) {
      throw new URIError(
        "Error on TypiaGenerateWizard.generate(): input path is not a directory.",
      );
    } else if (fs.existsSync(location.output) === false) {
      await fs.promises.mkdir(location.output, { recursive: true });
    } else if ((await isDirectory(location.output)) === false) {
      const parent: string = path.join(location.output, "..");
      if ((await isDirectory(parent)) === false) {
        throw new URIError(
          "Error on TypiaGenerateWizard.generate(): output path is not a directory.",
        );
      }
      await fs.promises.mkdir(location.output);
    }

    const files: string[] = [];
    await gather({
      location,
      container: files,
      from: location.input,
      to: location.output,
    });

    const cwd = path.dirname(location.project);
    for (const file of files) {
      const relative = path.relative(location.input, file);
      const target = path.join(location.output, relative);
      const output = transform({
        cwd,
        file,
        tsconfig: location.project,
        plugins: [{ transform: "typia/lib/transform" }],
      });
      await fs.promises.mkdir(path.dirname(target), { recursive: true });
      await fs.promises.writeFile(target, formatOutput(output), "utf8");
    }
  }

  async function isDirectory(current: string): Promise<boolean> {
    const stat: fs.Stats = await fs.promises.stat(current);
    return stat.isDirectory();
  }

  async function gather(props: {
    location: IArguments;
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
}

const TS_PATTERN = /\.[cm]?tsx?$/;
const DTS_PATTERN = /\.d\.[cm]?tsx?$/;
