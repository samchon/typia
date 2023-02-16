import type CommanderModule from "commander";
import fs from "fs";
import type * as InquirerModule from "inquirer";
import path from "path";

import { PackageManager } from "./PackageManager";

export namespace ArgumentParser {
    export interface IArguments {
        compiler: "ts-patch" | "ttypescript";
        manager: "npm" | "pnpm" | "yarn";
        project: string | null;
    }

    export async function parse(pack: PackageManager): Promise<IArguments> {
        // INSTALL TEMPORARY PACKAGES
        const newbie = {
            commander: pack.install({
                dev: true,
                modulo: "commander",
                silent: true,
            }),
            inquirer: pack.install({
                dev: true,
                modulo: "inquirer",
                version: "8.2.5",
                silent: true,
            }),
        };

        // TAKE OPTIONS
        const output: IArguments | Error = await (async () => {
            try {
                return await _Parse(pack);
            } catch (error) {
                return error as Error;
            }
        })();

        // REMOVE TEMPORARY PACKAGES
        if (newbie.commander) pack.erase({ modulo: "commander", silent: true });
        if (newbie.inquirer) pack.erase({ modulo: "inquirer", silent: true });

        // RETURNS
        if (output instanceof Error) throw output;
        return output;
    }

    async function _Parse(pack: PackageManager): Promise<IArguments> {
        // PREPARE ASSETS
        const { createPromptModule }: typeof InquirerModule = await import(
            path.join(pack.directory, "node_modules", "inquirer")
        );
        const { program }: typeof CommanderModule = await import(
            path.join(pack.directory, "node_modules", "commander")
        );

        program.option("--compiler [compiler]", "compiler type");
        program.option("--manager [manager", "package manager");
        program.option("--project [project]", "tsconfig.json file location");

        // INTERNAL PROCEDURES
        const questioned = { value: false };
        const action = (
            closure: (options: Partial<IArguments>) => Promise<IArguments>,
        ) => {
            return new Promise<IArguments>((resolve, reject) => {
                program.action(async (options) => {
                    try {
                        resolve(await closure(options));
                    } catch (exp) {
                        reject(exp);
                    }
                });
                program.parseAsync().catch(reject);
            });
        };
        const select =
            (name: string) =>
            (message: string) =>
            async <Choice extends string>(
                choices: Choice[],
            ): Promise<Choice> => {
                questioned.value = true;
                return (
                    await createPromptModule()({
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
            ).filter(
                (str) =>
                    str.substring(0, 8) === "tsconfig" &&
                    str.substring(str.length - 5) === ".json",
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
                    pack.data.scripts?.build === "nest build"
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
