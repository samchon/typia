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
        pack.install({
            dev: true,
            modulo: "typescript",
            version: (() => {
                const version: string = (() => {
                    try {
                        return require("ts-patch/package.json")?.version ?? "";
                    } catch {
                        return "";
                    }
                })();
                return Number(version.split(".")[0] ?? "") >= 3
                    ? "latest"
                    : "4.9.5";
            })(),
        });
        args.project ??= (() => {
            const runner: string =
                pack.manager === "npm" ? "npx" : pack.manager;
            CommandExecutor.run(`${runner} tsc --init`);
            return (args.project = "tsconfig.json");
        })();

        // SETUP TRANSFORMER
        await pack.save((data) => {
            // COMPOSE POSTINSTALL COMMAND
            data.scripts ??= {};
            if (
                typeof data.scripts.postinstall === "string" &&
                data.scripts.postinstall.trim().length
            ) {
                if (data.scripts.postinstall.indexOf("ts-patch install") === -1)
                    data.scripts.postinstall =
                        "ts-patch install && " + data.scripts.postinstall;
            } else data.scripts.postinstall = "ts-patch install";

            // FOR OLDER VERSIONS
            if (typeof data.scripts.prepare === "string") {
                data.scripts.prepare = data.scripts.prepare
                    .split("&&")
                    .map((str) => str.trim())
                    .filter((str) => str.indexOf("ts-patch install") === -1)
                    .join(" && ");
                if (data.scripts.prepare.length === 0)
                    delete data.scripts.prepare;
            }
        });
        CommandExecutor.run(`${pack.manager} run postinstall`);

        // CONFIGURE TYPIA
        await PluginConfigurator.configure(args);
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
                        filter,
                    })
                )[name];
            };
        const configure = async () => {
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
            } else if (fileList.length === 1) return fileList[0];
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
