import type CommanderModule from "commander";
import type * as InquirerModule from "inquirer";
import path from "path";

import { FileRetriever } from "./FileRetriever";
import { PackageManager } from "./PackageManager";

export namespace ArgumentParser {
    export type Inquiry<T> = (
        pack: PackageManager,
        command: CommanderModule.Command,
        prompt: (
            opt?: InquirerModule.StreamOptions,
        ) => InquirerModule.PromptModule,
        action: (closure: (options: Partial<T>) => Promise<T>) => Promise<T>,
    ) => Promise<T>;

    export const parse =
        (pack: PackageManager) =>
        (erase: boolean) =>
        async <T>(
            inquiry: (
                pack: PackageManager,
                command: CommanderModule.Command,
                prompt: (
                    opt?: InquirerModule.StreamOptions,
                ) => InquirerModule.PromptModule,
                action: (
                    closure: (options: Partial<T>) => Promise<T>,
                ) => Promise<T>,
            ) => Promise<T>,
        ): Promise<T> => {
            // INSTALL TEMPORARY PACKAGES
            const newbie = {
                commander: pack.install({
                    dev: true,
                    modulo: "commander",
                    version: "10.0.0",
                    silent: true,
                }),
                inquirer: pack.install({
                    dev: true,
                    modulo: "inquirer",
                    version: "8.2.5",
                    silent: true,
                }),
            };

            // LOAD INSTALLED MODULES
            const { program: command }: typeof CommanderModule =
                await FileRetriever.require(
                    path.join("node_modules", "commander"),
                )(pack.directory);
            const { createPromptModule: prompt }: typeof InquirerModule =
                await FileRetriever.require(
                    path.join("node_modules", "inquirer"),
                )(pack.directory);

            // TAKE OPTIONS
            const action = (closure: (options: Partial<T>) => Promise<T>) =>
                new Promise<T>((resolve, reject) => {
                    command.action(async (options) => {
                        try {
                            resolve(await closure(options));
                        } catch (exp) {
                            reject(exp);
                        }
                    });
                    command.parseAsync().catch(reject);
                });
            const output: T | Error = await (async () => {
                try {
                    return await inquiry(pack, command, prompt, action);
                } catch (error) {
                    return error as Error;
                }
            })();

            // REMOVE TEMPORARY PACKAGES
            if (erase === true) {
                if (newbie.commander)
                    pack.erase({ modulo: "commander", silent: true });
                if (newbie.inquirer)
                    pack.erase({ modulo: "inquirer", silent: true });
            }

            // RETURNS
            if (output instanceof Error) throw output;
            return output;
        };
}
