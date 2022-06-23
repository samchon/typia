import { RandomGenerator } from "../internal/RandomGenerator";

export type ArrayRecursiveUnion = ArrayRecursiveUnion.IBucket[];
export namespace ArrayRecursiveUnion {
    export type IBucket =
        | IDirectory
        | IImageFile
        | ITextFile
        | IZipFile
        | IShortcut;
    export type IFile = IImageFile | ITextFile | IZipFile;

    export interface IDirectory {
        id: string;
        name: string;
        path: string;
        children: IBucket[];
        type: "directory";
    }

    export interface IImageFile {
        id: string;
        name: string;
        path: string;
        width: number;
        height: number;
        url: string;
        size: number;
        type: "file";
        extension: "jpg";
    }
    export interface ITextFile {
        id: string;
        name: string;
        path: string;
        size: number;
        content: string;
        type: "file";
        extension: "txt";
    }
    export interface IZipFile {
        id: string;
        name: string;
        path: string;
        size: number;
        count: number;
        type: "file";
        extension: "zip";
    }

    export interface IShortcut {
        id: string;
        name: string;
        path: string;
        target: IBucket;
        type: "shortcut";
        extension: "lnk";
    }

    export function generate(
        limit: number = 3,
        level: number = 0,
    ): ArrayRecursiveUnion {
        const files = () => [
            generate_image_file(),
            generate_text_file(),
            generate_zip_file(),
        ];
        const directory = () => generate_directory(limit, level + 1);

        const output: ArrayRecursiveUnion = [
            ...files(),
            ...files().map((file) => generate_shortcut(file)),
        ];
        if (level < limit)
            output.push(directory(), generate_shortcut(directory()));
        return output;
    }

    function generate_directory(limit: number, level: number): IDirectory {
        return {
            children: generate(limit, level + 1),
            ...generate_bucket("directory"),
        };
    }
    function generate_image_file(): IImageFile {
        return {
            width: RandomGenerator.number(),
            height: RandomGenerator.number(),
            url: RandomGenerator.string(),
            ...generate_file("jpg"),
        };
    }
    function generate_text_file(): ITextFile {
        return {
            content: RandomGenerator.string(),
            ...generate_file("txt"),
        };
    }
    function generate_zip_file(): IZipFile {
        return {
            count: RandomGenerator.number(),
            ...generate_file("zip"),
        };
    }
    function generate_shortcut(target: IBucket): IShortcut {
        return {
            ...generate_bucket("shortcut"),
            extension: "lnk",
            target,
        };
    }

    function generate_bucket<Type extends string>(type: Type) {
        return {
            id: RandomGenerator.string(),
            name: RandomGenerator.string(),
            path: RandomGenerator.string(),
            type,
        };
    }
    function generate_file<Extension extends string>(extension: Extension) {
        return {
            extension,
            size: RandomGenerator.number(),
            ...generate_bucket("file"),
        };
    }
}
