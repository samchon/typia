import { RandomGenerator } from "../internal/RandomGenerator";

export type ArrayRecursiveUnionExplicit = ArrayRecursiveUnionExplicit.IBucket[];
export namespace ArrayRecursiveUnionExplicit {
    export type IBucket =
        | IDirectory
        | IImageFile
        | ITextFile
        | IZipFile
        | IShortcut;
    export type IFile = IImageFile | ITextFile | IZipFile;

    export interface IDirectory {
        id: number;
        name: string;
        path: string;
        children: IBucket[];
        type: "directory";
    }

    export interface IImageFile {
        id: number;
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
        id: number;
        name: string;
        path: string;
        size: number;
        content: string;
        type: "file";
        extension: "txt";
    }
    export interface IZipFile {
        id: number;
        name: string;
        path: string;
        size: number;
        count: number;
        type: "file";
        extension: "zip";
    }

    export interface IShortcut {
        id: number;
        name: string;
        path: string;
        target: IBucket;
        type: "file";
        extension: "lnk";
    }

    export function generate(
        limit: number = 3,
        level: number = 0,
    ): ArrayRecursiveUnionExplicit {
        const files = () => [
            generate_image_file(),
            generate_text_file(),
            generate_zip_file(),
        ];
        const directory = () => generate_directory(limit, level + 1);

        const output: ArrayRecursiveUnionExplicit = [
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
            width: RandomGenerator.integer(),
            height: RandomGenerator.integer(),
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
            count: RandomGenerator.integer(),
            ...generate_file("zip"),
        };
    }
    function generate_shortcut(target: IBucket): IShortcut {
        return {
            ...generate_bucket("file"),
            extension: "lnk",
            target,
        };
    }

    function generate_bucket<Type extends string>(type: Type) {
        return {
            id: RandomGenerator.integer(),
            name: RandomGenerator.string(),
            path: RandomGenerator.string(),
            type,
        };
    }
    function generate_file<Extension extends string>(extension: Extension) {
        return {
            extension,
            size: RandomGenerator.integer(),
            ...generate_bucket("file"),
        };
    }
}
