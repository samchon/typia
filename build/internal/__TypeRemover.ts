import fs from "fs";
import path from "path";

export namespace __TypeRemover {
    export async function remove(location: string): Promise<void> {
        const directory: string[] = await fs.promises.readdir(location);
        for (const file of directory) {
            const next: string = path.join(location, file);
            const stat: fs.Stats = await fs.promises.stat(next);
            if (stat.isDirectory()) {
                await remove(next);
                continue;
            } else if (file.endsWith(".ts") === false) continue;
            else if (file.indexOf("test_create") !== -1) continue;

            const content: string = await fs.promises.readFile(next, "utf8");
            if (
                content.indexOf("ObjectGenericUnion") !== -1 ||
                content.indexOf("__type") !== -1 ||
                content.indexOf("__object") !== -1 ||
                content.indexOf("Functional") !== -1
            )
                await fs.promises.rm(next);
        }
    }
}
