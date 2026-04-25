import fs from "fs";
import { DetectResult, detect } from "package-manager-detector";

import { ArgumentParser } from "./setup/ArgumentParser";
import { PackageManager } from "./setup/PackageManager";
import { PluginConfigurator } from "./setup/PluginConfigurator";

export namespace TypiaSetupWizard {
  const TTSC_PACKAGE = "ttsc";
  const TSGO_COMPILER_PACKAGE = "@typescript/native-preview";

  export interface IArguments {
    manager: "npm" | "pnpm" | "yarn" | "bun";
    project: string | null;
  }

  export const setup = async (): Promise<void> => {
    console.log("----------------------------------------");
    console.log(" Typia Setup Wizard");
    console.log("----------------------------------------");

    // PREPARE ASSETS
    const pack: PackageManager = await PackageManager.mount();
    const args: IArguments = await ArgumentParser.parse(pack, inquiry);

    args.project ??= (() => {
      fs.writeFileSync(
        "tsconfig.json",
        `${JSON.stringify({ compilerOptions: {} }, null, 2)}\n`,
        "utf8",
      );
      return (args.project = "tsconfig.json");
    })();

    // CONFIGURE TYPIA
    await PluginConfigurator.configure(args);

    // NORMALIZE PROJECT SETTINGS
    await pack.save((data) => {
      if (typeof data.scripts?.prepare === "string") {
        const prepare = removeLegacyCompilerPatchSteps(data.scripts.prepare);
        if (prepare.length !== 0) data.scripts.prepare = prepare;
        else delete data.scripts.prepare;
        if (Object.keys(data.scripts).length === 0) delete data.scripts;
      }
      if (data.devDependencies?.["ts-patch"] !== undefined) {
        delete data.devDependencies["ts-patch"];
      }
      if (data.devDependencies?.["@typia/ttsc"] !== undefined) {
        delete data.devDependencies["@typia/ttsc"];
      }
      if (data.devDependencies?.["@typia/ttsx"] !== undefined) {
        delete data.devDependencies["@typia/ttsx"];
      }
      if (data.devDependencies !== undefined) {
        if (Object.keys(data.devDependencies).length === 0)
          delete data.devDependencies;
      }
      if (data.dependencies?.["ts-patch"] !== undefined) {
        delete data.dependencies["ts-patch"];
      }
      if (data.dependencies?.["@typia/ttsc"] !== undefined) {
        delete data.dependencies["@typia/ttsc"];
      }
      if (data.dependencies?.["@typia/ttsx"] !== undefined) {
        delete data.dependencies["@typia/ttsx"];
      }
      if (data.dependencies !== undefined) {
        if (Object.keys(data.dependencies).length === 0)
          delete data.dependencies;
      }
    });

    // INSTALL TSGO TOOLCHAIN
    pack.install({
      dev: true,
      modulo: TSGO_COMPILER_PACKAGE,
      version: "latest",
    });
    pack.install({ dev: true, modulo: TTSC_PACKAGE, version: "latest" });
  };

  const inquiry: ArgumentParser.Inquiry<IArguments> = async (
    pack,
    command,
    prompt,
    action,
  ) => {
    // PREPARE ASSETS
    command.option("--manager [manager", "package manager");
    command.option("--project [project]", "tsconfig.json file location");

    // INTERNAL PROCEDURES
    const questioned = { value: false };
    const select =
      (name: string) =>
      (message: string) =>
      async <Choice extends string>(
        choices: Choice[],
        filter?: (choice: string) => Choice,
      ): Promise<Choice> => {
        questioned.value = true;
        return (
          await prompt()({
            type: "list",
            name: name,
            message: message,
            choices: choices,
            ...(filter ? { filter } : {}),
          })
        )[name];
      };
    const configure = async (): Promise<string | null> => {
      const fileList: string[] = await (
        await fs.promises.readdir(process.cwd())
      )
        .filter(
          (str) =>
            str.substring(0, 8) === "tsconfig" &&
            str.substring(str.length - 5) === ".json",
        )
        .sort((x, y) =>
          x === "tsconfig.json"
            ? -1
            : y === "tsconfig.json"
              ? 1
              : x < y
                ? -1
                : 1,
        );
      if (fileList.length === 0) {
        if (process.cwd() !== pack.directory)
          throw new URIError(`Unable to find "tsconfig.json" file.`);
        return null;
      } else if (fileList.length === 1) return fileList[0]!;
      return select("tsconfig")("TS Config File")(fileList);
    };

    // DO CONSTRUCT
    return action(async (options) => {
      pack.manager = options.manager ??=
        (await detectManager()) ??
        (await select("manager")("Package Manager")(
          [
            "npm" as const,
            "pnpm" as const,
            "bun" as const,
            "yarn (berry is not supported)" as "yarn",
          ],
          (value) => value.split(" ")[0] as "yarn",
        ));
      options.project ??= await configure();

      if (questioned.value) console.log("");
      return options as IArguments;
    });
  };

  const detectManager = async (): Promise<
    "npm" | "pnpm" | "yarn" | "bun" | null
  > => {
    const result: DetectResult | null = await detect({ cwd: process.cwd() });
    switch (result?.name) {
      case "npm":
      case "deno":
        return null; // NPM case is still selectable & Deno is not supported
      default:
        return result?.name ?? null;
    }
  };

  const isLegacyCompilerPatchStep = (str: string): boolean =>
    str === "typia patch" || str.includes("ts-patch install");

  const removeLegacyCompilerPatchSteps = (script: string): string =>
    script
      .split("&&")
      .map((str) => str.trim())
      .filter(
        (str) => str.length !== 0 && isLegacyCompilerPatchStep(str) === false,
      )
      .join(" && ");
}
