import fs from "fs";

import { TypiaFileFactory } from "../factories/TypiaFileFactory";

import { ArgumentParser } from "./setup/ArgumentParser";
import { PackageManager } from "./setup/PackageManager";

export namespace TypiaGenerateWizard {
    export async function generate(): Promise<void> {
        console.log("----------------------------------------");
        console.log(" Typia Generate Wizard");
        console.log("----------------------------------------");

        // LOAD PACKAGE.JSON INFO
        const pack: PackageManager = await PackageManager.mount();
        const options: IArguments = await ArgumentParser.parse(pack)(false)(
            inquiry,
        );
        await TypiaFileFactory.generate(options);
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
            ).filter(
                (str) =>
                    str.substring(0, 8) === "tsconfig" &&
                    str.substring(str.length - 5) === ".json",
            );
            if (fileList.length === 0)
                throw new Error(`Unable to find "tsconfig.json" file.`);
            else if (fileList.length === 1) return fileList[0];
            return select("tsconfig")("TS Config File")(fileList);
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
}
