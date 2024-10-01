import fs from "fs";
import path from "path";

import { CommandExecutor } from "./CommandExecutor";
import { FileRetriever } from "./FileRetriever";

export class PackageManager {
  public manager: Manager = "npm";
  public get file(): string {
    return path.join(this.directory, "package.json");
  }

  public static async mount(): Promise<PackageManager> {
    const location: string | null = await FileRetriever.directory({
      file: "package.json",
      location: process.cwd(),
    });
    if (location === null)
      throw new URIError(`Unable to find "package.json" file`);

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
    modulo: string;
    version: string;
  }): boolean {
    const middle: string = [
      installCmdTable[this.manager],
      props.dev ? devOptionTable[this.manager] : "",
    ]
      .filter((str) => !!str.length)
      .join(" ");
    const modulo: string = `${props.modulo}${props.version ? `@${props.version}` : ""}`;
    CommandExecutor.run([this.manager, middle, modulo].join(" "));
    return true;
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

type Manager = "npm" | "pnpm" | "yarn" | "bun";

const installCmdTable = {
  npm: "i",
  pnpm: "add",
  yarn: "add",
  bun: "add",
} as const satisfies Record<Manager, string>;

const devOptionTable = {
  npm: "-D",
  pnpm: "-D",
  yarn: "-D",
  bun: "-d",
} as const satisfies Record<Manager, string>;
