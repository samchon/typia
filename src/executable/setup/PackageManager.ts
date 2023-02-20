import fs from "fs";
import path from "path";

import { CommandExecutor } from "./CommandExecutor";
import { FileRetriever } from "./FileRetriever";

export class PackageManager {
    public manager: string = "npm";
    public get file(): string {
        return path.join(this.directory, "package.json");
    }

    public static async mount(): Promise<PackageManager> {
        const location: string | null = await FileRetriever.directory(
            "package.json",
        )(process.cwd());
        if (location === null)
            throw new Error(`Unable to find "package.json" file`);

        return new PackageManager(
            location,
            await this.load(path.join(location, "package.json")),
        );
    }

    public async save(modifier: (data: Package.Data) => void): Promise<void> {
        const content: string = await fs.promises.readFile(this.file, "utf8");
        this.data = JSON.parse(content);
        modifier(this.data);

        return fs.promises.writeFile(
            this.file,
            JSON.stringify(this.data, null, 2),
            "utf8",
        );
    }

    public install(props: {
        dev: boolean;
        silent?: boolean;
        modulo: string;
        version?: string;
    }): boolean {
        const container = props.dev
            ? this.data.devDependencies
            : this.data.dependencies;
        if (
            !!container?.[props.modulo] &&
            FileRetriever.file(path.join("node_modules", props.modulo))(
                this.directory,
            ) !== null
        )
            return false;

        const middle: string =
            this.manager === "yarn"
                ? `add${props.dev ? " -D" : ""}`
                : `install ${props.dev ? "--save-dev" : "--save"}`;
        CommandExecutor.run(
            `${this.manager} ${middle} ${props.modulo}${
                props.version ? `@${props.version}` : ""
            }`,
            !!props.silent,
        );
        return true;
    }

    public erase(props: { modulo: string; silent?: boolean }): void {
        const middle: string = this.manager === "yarn" ? "remove" : "uninstall";
        CommandExecutor.run(
            `${this.manager} ${middle} ${props.modulo}`,
            !!props.silent,
        );
    }

    private constructor(
        public readonly directory: string,
        public data: Package.Data,
    ) {}

    private static async load(file: string): Promise<Package.Data> {
        const content: string = await fs.promises.readFile(file, "utf8");
        return JSON.parse(content);
    }
}
export namespace Package {
    export interface Data {
        scripts?: Record<string, string>;
        dependencies?: Record<string, string>;
        devDependencies?: Record<string, string>;
    }
}
