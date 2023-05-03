import fs from "fs";
import path from "path";

export namespace FileRetriever {
    export const directory =
        (name: string) =>
        (dir: string, depth: number = 0): string | null => {
            const location: string = path.join(dir, name);
            if (fs.existsSync(location)) return dir;
            else if (depth > 2) return null;
            return directory(name)(path.join(dir, ".."), depth + 1);
        };

    export const file =
        (name: string) =>
        (directory: string, depth: number = 0): string | null => {
            const location: string = path.join(directory, name);
            if (fs.existsSync(location)) return location;
            else if (depth > 2) return null;
            return file(name)(path.join(directory, ".."), depth + 1);
        };
}
