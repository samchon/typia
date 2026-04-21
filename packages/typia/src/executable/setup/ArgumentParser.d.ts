import commander from "commander";
import inquirer from "inquirer";
import { PackageManager } from "./PackageManager";
export declare namespace ArgumentParser {
    type Inquiry<T> = (pack: PackageManager, command: commander.Command, prompt: (opt?: inquirer.StreamOptions) => inquirer.PromptModule, action: (closure: (options: Partial<T>) => Promise<T>) => Promise<T>) => Promise<T>;
    const parse: <T>(pack: PackageManager, inquiry: (pack: PackageManager, command: commander.Command, prompt: (opt?: inquirer.StreamOptions) => inquirer.PromptModule, action: (closure: (options: Partial<T>) => Promise<T>) => Promise<T>) => Promise<T>) => Promise<T>;
}
