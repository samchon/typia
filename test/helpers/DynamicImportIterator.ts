import chalk from "chalk";
import cli from "cli";
import fs from "fs";

import { IPointer } from "./IPointer";
import { StopWatch } from "./StopWatch";

const EXTENSION = __filename.substring(__filename.length - 2);
if (EXTENSION === "js") require("source-map-support/register");

interface ICommand {
    include?: string;
    exclude?: string;
}

export namespace DynamicImportIterator {
    export type Closure<Arguments extends any[], Ret = any> = (
        ...args: Arguments
    ) => Promise<Ret>;
    type Module<Arguments extends any[]> = {
        [key: string]: Closure<Arguments>;
    };

    export interface IOptions<Parameters extends any[], Ret = any> {
        prefix: string;
        parameters: (name: string) => Parameters;
        wrapper?: (
            name: string,
            closure: Closure<Parameters, Ret>,
        ) => Promise<any>;
        counter?: IPointer<number>;
        showElapsedTime?: boolean;
    }

    export async function main<Arguments extends any[]>(
        path: string,
        options: IOptions<Arguments>,
    ): Promise<void> {
        const command: ICommand = cli.parse();
        await iterate(options, command, path);
    }

    export async function force<Arguments extends any[]>(
        path: string,
        options: IOptions<Arguments>,
    ): Promise<Error[]> {
        const command: ICommand = cli.parse();
        const exceptions: Error[] = [];

        await iterate(options, command, path, exceptions);
        return exceptions;
    }

    async function iterate<Arguments extends any[]>(
        options: IOptions<Arguments>,
        command: ICommand,
        path: string,
        exceptions?: Error[],
    ): Promise<void> {
        const directory: string[] = await fs.promises.readdir(path);
        for (const file of directory) {
            const current: string = `${path}/${file}`;
            const stats: fs.Stats = await fs.promises.lstat(current);

            if (stats.isDirectory() === true) {
                await iterate(options, command, current, exceptions);
                continue;
            } else if (file.substring(file.length - 3) !== `.${EXTENSION}`)
                continue;
            else if (command.exclude && file.indexOf(command.exclude) !== -1)
                continue;
            else if (command.include && file.indexOf(command.include) === -1)
                continue;

            const external: Module<Arguments> = await import(current);
            await execute(options, command, external, exceptions);
        }
    }

    async function execute<Arguments extends any[]>(
        options: IOptions<Arguments>,
        command: ICommand,
        external: Module<Arguments>,
        exceptions?: Error[],
    ): Promise<void> {
        for (const key in external) {
            if (command.exclude && key.indexOf(command.exclude) !== -1)
                continue;
            else if (command.include && key.indexOf(command.include) === -1)
                continue;
            else if (key.substring(0, options.prefix.length) !== options.prefix)
                continue;
            else if (!(external[key] instanceof Function)) continue;

            const closure: Closure<Arguments> = external[key];
            const func = async () => {
                if (options.wrapper !== undefined)
                    await options.wrapper(key, closure);
                else await closure(...options.parameters(key));
            };
            const label: string = chalk.greenBright(key);
            try {
                if (options.counter) ++options.counter.value;
                if (options.showElapsedTime === false) {
                    await func();
                    console.log(`  - ${label}`);
                } else {
                    const time: number = await StopWatch.measure(func);
                    console.log(
                        `  - ${label}: ${chalk.yellowBright(
                            time.toLocaleString(),
                        )} ms`,
                    );
                }
            } catch (exp) {
                if (!(exp instanceof Error)) return;

                console.log(`  - ${label} -> ${chalk.redBright(exp.name)}`);
                if (exceptions !== undefined) exceptions.push(exp);
                else throw exp;
            }
        }
    }
}
