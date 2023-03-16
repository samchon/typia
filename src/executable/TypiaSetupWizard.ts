import fs from "fs";
import path from "path";

import { ArgumentParser } from "./setup/ArgumentParser";
import { CommandExecutor } from "./setup/CommandExecutor";
import { PackageManager } from "./setup/PackageManager";
import { PluginConfigurator } from "./setup/PluginConfigurator";

export namespace TypiaSetupWizard {
    export interface IArguments {
        compiler: "ts-patch" | "ttypescript";
        manager: "npm" | "pnpm" | "yarn";
        project: string | null;
    }

    export async function setup(): Promise<void> {
        console.log("----------------------------------------");
        console.log(" Typia Setup Wizard");
        console.log("----------------------------------------");

        // PREPARE ASSETS
        const pack: PackageManager = await PackageManager.mount();
        const args: IArguments = await ArgumentParser.parse(pack)(true)(
            inquiry,
        );

        // INSTALL TYPESCRIPT
        pack.install({ dev: true, modulo: "typescript", version: "4.9.5" });
        args.project ??= (() => {
            CommandExecutor.run("npx tsc --init", false);
            return (args.project = "tsconfig.json");
        })();
        pack.install({ dev: true, modulo: "ts-node" });

        // INSTALL COMPILER
        pack.install({ dev: true, modulo: args.compiler });
        if (args.compiler === "ts-patch") {
            await pack.save((data) => {
                data.scripts ??= {};
                if (
                    typeof data.scripts.prepare === "string" &&
                    data.scripts.prepare.indexOf("ts-patch install") === -1
                )
                    data.scripts.prepare =
                        "ts-patch install && " + data.scripts.prepare;
                else data.scripts.prepare = "ts-patch install";
            });
            CommandExecutor.run("npm run prepare", false);
        }

        // INSTALL AND CONFIGURE TYPIA
        pack.install({ dev: false, modulo: "typia" });
        await PluginConfigurator.configure(pack, args);
    }

    const inquiry: ArgumentParser.Inquiry<IArguments> = async (
        pack,
        command,
        prompt,
        action,
    ) => {
        // PREPARE ASSETS
        command.option("--compiler [compiler]", "compiler type");
        command.option("--manager [manager", "package manager");
        command.option("--project [project]", "tsconfig.json file location");

        // INTERNAL PROCEDURES
        const questioned = { value: false };
        const select =
            (name: string) =>
            (message: string) =>
            async <Choice extends string>(
                choices: Choice[],
            ): Promise<Choice> => {
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
                    throw new Error(`Unable to find "tsconfig.json" file.`);
                return null;
            } else if (fileList.length === 1) return fileList[0];
            return select("tsconfig")("TS Config File")(fileList);
        };

        // DO CONSTRUCT
        return action(async (options) => {
            if (options.compiler === undefined) {
                console.log(COMPILER_DESCRIPTION);
                options.compiler = await select("compiler")(`Compiler`)(
                    is_nest_cli(pack)
                        ? ["ts-patch" as const, "ttypescript" as const]
                        : ["ttypescript" as const, "ts-patch" as const],
                );
            }
            options.manager ??= await select("manager")("Package Manager")([
                "npm" as const,
                "pnpm" as const,
                "yarn" as const,
            ]);
            pack.manager = options.manager;
            options.project ??= await configure();

            if (questioned.value) console.log("");
            return options as IArguments;
        });
    };

    function is_nest_cli(pack: PackageManager): boolean {
        return (
            (typeof pack.data.scripts?.build === "string" &&
                pack.data.scripts.build.indexOf("nest build") !== -1) ||
            fs.existsSync(path.join(pack.directory, "nest-cli.json"))
        );
    }
}

const COMPILER_DESCRIPTION = [
    `About compiler, if you adapt "ttypescript", you should use "ttsc" instead.`,
    ``,
    `Otherwise, you choose "ts-patch", you can use the original "tsc" command.`,
    `However, the "ts-patch" hacks "node_modules/typescript" source code.`,
    `Also, whenever update "typescript", you've to run "npm run prepare" command.`,
    ``,
    `By the way, when using "@nest/cli", you must just choose "ts-patch".`,
    ``,
].join("\n");
