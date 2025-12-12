import commander from "commander";
import inquirer from "inquirer";

import { PackageManager } from "./PackageManager";

export namespace ArgumentParser {
  export type Inquiry<T> = (
    pack: PackageManager,
    command: commander.Command,
    prompt: (opt?: inquirer.StreamOptions) => inquirer.PromptModule,
    action: (closure: (options: Partial<T>) => Promise<T>) => Promise<T>,
  ) => Promise<T>;

  export const parse = async <T>(
    pack: PackageManager,
    inquiry: (
      pack: PackageManager,
      command: commander.Command,
      prompt: (opt?: inquirer.StreamOptions) => inquirer.PromptModule,
      action: (closure: (options: Partial<T>) => Promise<T>) => Promise<T>,
    ) => Promise<T>,
  ): Promise<T> => {
    // TAKE OPTIONS
    const action = (closure: (options: Partial<T>) => Promise<T>) =>
      new Promise<T>((resolve, reject) => {
        commander.program.action(async (...args: unknown[]) => {
          try {
            // Commander passes: (positionalArgs..., options, command)
            // Use program.opts() for reliable option extraction
            const options = commander.program.opts() as Partial<T>;
            // If there are positional arguments (files), attach them to options
            if (args.length > 0 && Array.isArray(args[0])) {
              (options as Partial<T> & { files?: string[] }).files = args[0];
            }
            resolve(await closure(options));
          } catch (exp) {
            reject(exp);
          }
        });
        commander.program.parseAsync().catch(reject);
      });
    return inquiry(
      pack,
      commander.program,
      inquirer.createPromptModule,
      action,
    );
  };
}
