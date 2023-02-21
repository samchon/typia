import type Comment from "comment-json";
import fs from "fs";
import path from "path";

import { TypiaSetupWizard } from "../TypiaSetupWizard";
import { FileRetriever } from "./FileRetriever";
import { PackageManager } from "./PackageManager";

export namespace PluginConfigurator {
    export async function configure(
        pack: PackageManager,
        args: TypiaSetupWizard.IArguments,
    ): Promise<void> {
        // INSTALL COMMENT-JSON
        const installed: boolean = pack.install({
            dev: true,
            modulo: "comment-json",
            version: "4.2.3",
            silent: true,
        });

        // DO CONFIGURE
        const error: Error | null = await (async () => {
            try {
                await _Configure(pack, args);
                return null;
            } catch (exp) {
                return exp as Error;
            }
        })();

        // REMOVE IT
        if (installed)
            pack.erase({
                modulo: "comment-json",
                silent: true,
            });
        if (error !== null) throw error;
    }

    async function _Configure(
        pack: PackageManager,
        args: TypiaSetupWizard.IArguments,
    ): Promise<void> {
        // GET COMPILER-OPTIONS
        const Comment: typeof import("comment-json") =
            await FileRetriever.require(
                path.join("node_modules", "comment-json"),
            )(pack.directory);

        const config: Comment.CommentObject = Comment.parse(
            await fs.promises.readFile(args.project!, "utf8"),
        ) as Comment.CommentObject;
        const compilerOptions = config.compilerOptions as
            | Comment.CommentObject
            | undefined;
        if (compilerOptions === undefined)
            throw new Error(
                `${args.project} file does not have "compilerOptions" property.`,
            );

        // PREPARE PLUGINS
        const plugins: Comment.CommentArray<Comment.CommentObject> = (() => {
            const plugins = compilerOptions.plugins as
                | Comment.CommentArray<Comment.CommentObject>
                | undefined;
            if (plugins === undefined)
                return (compilerOptions.plugins = [] as any);
            else if (!Array.isArray(plugins))
                throw new Error(
                    `"plugins" property of ${args.project} must be array type.`,
                );
            return plugins;
        })();

        const strict: boolean = compilerOptions.strict === true;
        const oldbie: Comment.CommentObject | undefined = plugins.find(
            (p) =>
                typeof p === "object" &&
                p !== null &&
                p.transform === "typia/lib/transform",
        );
        if (strict === true && oldbie !== undefined) return;

        // DO CONFIGURE
        compilerOptions.strict = true;
        if (oldbie === undefined)
            plugins.push(
                Comment.parse(`
                        {
                            "transform": "typia/lib/transform"
                        }`) as Comment.CommentObject,
            );
        await fs.promises.writeFile(
            args.project!,
            Comment.stringify(config, null, 2),
        );
    }
}
