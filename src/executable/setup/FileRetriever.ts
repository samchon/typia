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

    export const require =
        (name: string) =>
        async (directory: string, depth: number = 0) => {
            const location: string | null = file(name)(directory, depth);
            if (location === null)
                throw new Error(
                    `Unable to find installed module. Please report to the nestia - https://github.com/samchon/nestia/issues`,
                );
            return import(location);
        };
}
