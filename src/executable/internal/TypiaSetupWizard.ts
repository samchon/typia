import cp from "child_process";
import type Comment from "comment-json";
import fs from "fs";

export namespace TypiaSetupWizard {
    export async function ttypescript(): Promise<void> {
        // INSTALL
        prepare();
        install("ttypescript", "--save-dev");
        install("ts-node", "--save-dev");

        // TSCONFIG.JSON
        await configure();
    }

    export async function tsPatch(): Promise<void> {
        // INSTALL
        prepare();
        install("ts-patch", "--save-dev");
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
        await configure();
    }

    async function prepare(): Promise<void> {
        if (fs.existsSync("package.json") === false)
            halt("make package.json file or move to it.");
        install("typia", "--save");
        install("typescript", "--save-dev");
    }

    async function configure(): Promise<void> {
        // VALIDATE PRERATATION
        if (fs.existsSync("tsconfig.json") === false) {
            execute("npx tsc --init");
            if (fs.existsSync("tsconfig.json") === false)
                halt("tsconfig.json file does not exist.");
        }

        const temporary: boolean = !fs.existsSync("node_modules/comment-json");
        if (temporary === true)
            cp.execSync("npm install --save-dev comment-json");

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
            halt(
                `tsconfig.json file does not have "compilerOptions" property.`,
            );

        const plugins: Comment.CommentArray<Comment.CommentObject> = (() => {
            const plugins = options.plugins as
                | Comment.CommentArray<Comment.CommentObject>
                | undefined;
            if (plugins === undefined) return (options.plugins = [] as any);
            else if (!Array.isArray(plugins))
                halt(`"plugins" property of tsconfig.json must be array type.`);
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
            return;
        }

        // DO CONFIGURE
        options.strict = true;
        plugins.push({ transform: "typia/lib/transform" } as any);

        await fs.promises.writeFile(
            "tsconfig.json",
            Comment.stringify(config, null, 2),
        );
        if (temporary === true)
            cp.execSync("npm uninstall --save-dev comment-json");
    }
}

function install(modulo: string, mode: "--save" | "--save-dev"): void {
    if (fs.existsSync("node_modules/" + modulo) === false)
        execute(`npm install ${mode} ${modulo}`);
}

function halt(desc: string): never {
    console.error(desc);
    process.exit(-1);
}

function execute(command: string): void {
    console.log(command);
    cp.execSync(command, { stdio: "inherit" });
}