import fs from "fs";

import { ArgumentParser } from "./setup/ArgumentParser";
import { CommandExecutor } from "./setup/CommandExecutor";
import { PackageManager } from "./setup/PackageManager";
import { PluginConfigurator } from "./setup/PluginConfigurator";

export namespace TypiaSetupWizard {
  export interface IArguments {
    manager: "npm" | "pnpm" | "yarn";
    project: string | null;
  }

  export async function setup(): Promise<void> {
    console.log("----------------------------------------");
    console.log(" Typia Setup Wizard");
    console.log("----------------------------------------");

    // PREPARE ASSETS
    const pack: PackageManager = await PackageManager.mount();
    const args: IArguments = await ArgumentParser.parse(pack)(inquiry);

    // INSTALL TYPESCRIPT COMPILERS
    pack.install({ dev: true, modulo: "ts-patch", version: "latest" });
    pack.install({ dev: true, modulo: "ts-node", version: "latest" });
    pack.install({ dev: true, modulo: "typescript", version: "5.4.2" });
    args.project ??= (() => {
      const runner: string = pack.manager === "npm" ? "npx" : pack.manager;
      CommandExecutor.run(`${runner} tsc --init`);
      return (args.project = "tsconfig.json");
    })();

    // SETUP TRANSFORMER
    await pack.save((data) => {
      // COMPOSE PREPARE COMMAND
      data.scripts ??= {};
      if (
        typeof data.scripts.prepare === "string" &&
        data.scripts.prepare.trim().length
      ) {
        if (
          data.scripts.prepare.indexOf("ts-patch install") === -1 &&
          data.scripts.prepare.indexOf("typia patch") === -1
        )
          data.scripts.prepare =
            "ts-patch install && typia patch && " + data.scripts.prepare;
        else if (data.scripts.prepare.indexOf("ts-patch install") === -1)
          data.scripts.prepare = "ts-patch install && " + data.scripts.prepare;
        else if (data.scripts.prepare.indexOf("typia patch") === -1)
          data.scripts.prepare = data.scripts.prepare.replace(
            "ts-patch install",
            "ts-patch install && typia patch",
          );
      } else data.scripts.prepare = "ts-patch install && typia patch";

      // FOR OLDER VERSIONS
      if (typeof data.scripts.postinstall === "string") {
        data.scripts.postinstall = data.scripts.postinstall
          .split("&&")
          .map((str) => str.trim())
          .filter((str) => str.indexOf("ts-patch install") === -1)
          .join(" && ");
        if (data.scripts.postinstall.length === 0)
          delete data.scripts.postinstall;
      }
    });

    // CONFIGURE TYPIA
    await PluginConfigurator.configure(args);
    CommandExecutor.run(`${pack.manager} run prepare`);
  }

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
            ...(filter
              ? {
                  filter,
                }
              : {}),
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
      pack.manager = options.manager ??= await select("manager")(
        "Package Manager",
      )(
        [
          "npm" as const,
          "pnpm" as const,
          "yarn (berry is not supported)" as "yarn",
        ],
        (value) => value.split(" ")[0] as "yarn",
      );
      options.project ??= await configure();

      if (questioned.value) console.log("");
      return options as IArguments;
    });
  };
}
