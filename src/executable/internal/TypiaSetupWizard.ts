import cp from "child_process";
import type Comment from "comment-json";
import fs from "fs";

export namespace TypiaSetupWizard {
    export async function ttypescript(manager: string): Promise<void> {
        // INSTALL
        const pack: any = await prepare(manager);
        add(manager)(pack)("ttypescript", true);
        add(manager)(pack)("ts-node", true);

        // TSCONFIG.JSON
        await configure(manager)(pack);
    }

    export async function tsPatch(manager: string): Promise<void> {
        // INSTALL
        add(manager)(await prepare(manager))("ts-patch", true);
        execute("npx ts-patch install");

        // PACKAGE.JSON
        const pack: any = JSON.parse(
            await fs.promises.readFile("package.json", "utf8"),
        );
        if (!pack.scripts || typeof pack.scripts !== "object")
            pack.scripts = {};
        if (typeof pack.scripts.prepare === "string") {
            if (pack.scripts.prepare.indexOf("ts-patch install") === -1)
                pack.scripts.prepare =
                    "ts-patch install && " + pack.scripts.prepare;
        } else pack.scripts.prepare = "ts-patch install";

        await fs.promises.writeFile(
            "package.json",
            JSON.stringify(pack, null, 2),
            "utf8",
        );

        // TSCONFIG.JSON
        await configure(manager)(pack);
    }

    async function prepare(manager: string): Promise<any> {
        if (fs.existsSync("package.json") === false)
            halt(() => {})("make package.json file or move to it.");

        const pack: any = JSON.parse(
            await fs.promises.readFile("package.json", "utf8"),
        );
        const wizard = add(manager)(pack);

        wizard("typia", false);
        wizard("typescript", true);
        return pack;
    }

    const configure =
        (manager: string) =>
        async (pack: any): Promise<void> => {
            // VALIDATE PRERATATION
            if (fs.existsSync("tsconfig.json") === false) {
                execute("npx tsc --init");
                if (fs.existsSync("tsconfig.json") === false)
                    halt(() => {})("tsconfig.json file does not exist.");
            }

            const temporary: boolean = !fs.existsSync(
                "node_modules/comment-json",
            );
            if (temporary === true) add(manager)(pack)("comment-json", true);

            const halter: (msg: string) => never = halt(() => {
                if (temporary === true) remove(manager)("comment-json", true);
            });

            // READ TSCONFIG FILE
            const Comment: typeof import("comment-json") = await import(
                process.cwd() + "/node_modules/comment-json"
            );
            const config: Comment.CommentObject = Comment.parse(
                await fs.promises.readFile("tsconfig.json", "utf8"),
            ) as Comment.CommentObject;
            const options = config.compilerOptions as
                | Comment.CommentObject
                | undefined;
            if (options === undefined)
                halter(
                    `tsconfig.json file does not have "compilerOptions" property.`,
                );

            const plugins: Comment.CommentArray<Comment.CommentObject> =
                (() => {
                    const plugins = options.plugins as
                        | Comment.CommentArray<Comment.CommentObject>
                        | undefined;
                    if (plugins === undefined)
                        return (options.plugins = [] as any);
                    else if (!Array.isArray(plugins))
                        halter(
                            `"plugins" property of tsconfig.json must be array type.`,
                        );
                    return plugins;
                })();

            // CHECK WHETHER CONFIGURED
            const strict: boolean = options.strict === true;
            const oldbie: Comment.CommentObject | undefined = plugins.find(
                (p) =>
                    typeof p === "object" &&
                    p !== null &&
                    p.transform === "typia/lib/transform",
            );

            if (strict === true && oldbie !== undefined) {
                console.log(
                    "you've been already configured the tsconfig.json file.",
                );
            } else {
                // DO CONFIGURE
                options.strict = true;
                if (oldbie === undefined)
                    plugins.push(
                        Comment.parse(`{
                            "transform": "typia/lib/transform",
                            "numeric": true, // check isNaN() and isFinite()
                            "functional": false, // validate function type
                        }`) as Comment.CommentObject,
                    );
                await fs.promises.writeFile(
                    "tsconfig.json",
                    Comment.stringify(config, null, 2),
                );
            }
            if (temporary === true) remove(manager)("comment-json", false);
        };
}

const add =
    (manager: string) =>
    (pack: any) =>
    (modulo: string, devOnly: boolean): void => {
        const exists: boolean =
            (devOnly === false
                ? !!pack.dependencies && !!pack.dependencies[modulo]
                : !!pack.devDependencies && !!pack.devDependencies[modulo]) &&
            fs.existsSync("node_modules/" + modulo);
        const middle: string =
            manager === "yarn"
                ? `add${devOnly ? " -D" : ""}`
                : `install ${devOnly ? "--save-dev" : "--save"}`;
        if (exists === false) execute(`${manager} ${middle} ${modulo}`);
    };

const remove =
    (manager: string) =>
    (modulo: string, devOnly: boolean): void => {
        const middle: string =
            manager === "yarn"
                ? `remove${devOnly ? " -D" : ""}`
                : `uninstall ${devOnly ? "--save-dev" : "--save"}`;
        execute(`${manager} ${middle} ${modulo}`);
    };

const halt =
    (closer: () => any) =>
    (desc: string): never => {
        closer();
        console.error(desc);
        process.exit(-1);
    };

function execute(command: string): void {
    console.log(command);
    cp.execSync(command, { stdio: "inherit" });
}
