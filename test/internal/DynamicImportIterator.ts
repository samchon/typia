const EXTENSION = __filename.substr(-2);
if (EXTENSION === "js") require("source-map-support/register");

import cli from "cli";
import fs from "fs";

import { IPointer } from "./IPointer";
import { StopWatch } from "./StopWatch";

interface ICommand {
    include?: string;
    exclude?: string;
}

export namespace DynamicImportIterator {
    export type Closure<Arguments extends any[]> = (
        ...args: Arguments
    ) => Promise<void>;
    type Module<Arguments extends any[]> = {
        [key: string]: Closure<Arguments>;
    };

    export interface IOptions<Parameters extends any[]> {
        prefix: string;
        parameters: () => Parameters;
        wrapper?: (name: string, closure: Closure<Parameters>) => Promise<void>;
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
            } else if (file.substr(-3) !== `.${EXTENSION}`) continue;

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
            else if (key.substr(0, options.prefix.length) !== options.prefix)
                continue;
            else if (external[key] instanceof Function) {
                const closure: Closure<Arguments> = external[key];
                const func = async () => {
                    if (options.wrapper !== undefined)
                        await options.wrapper(key, closure);
                    else await closure(...options.parameters());
                };

                try {
                    if (options.counter) ++options.counter.value;
                    if (options.showElapsedTime === false) {
                        await func();
                        console.log(`  - ${key}`);
                    } else {
                        const time: number = await StopWatch.measure(func);
                        console.log(`  - ${key}: ${time.toLocaleString()} ms`);
                    }
                } catch (exp) {
                    if (!(exp instanceof Error)) return;

                    console.log(`  - ${key} -> ${exp.name}`);
                    if (exceptions !== undefined) exceptions.push(exp);
                    else throw exp;
                }
            }
        }
    }
}
