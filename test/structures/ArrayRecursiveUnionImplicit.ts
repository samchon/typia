import { RandomGenerator } from "../internal/RandomGenerator";

export type ArrayRecursiveUnionImplicit = ArrayRecursiveUnionImplicit.IBucket[];
export namespace ArrayRecursiveUnionImplicit {
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
    }

    export interface IImageFile {
        id: number;
        name: string;
        path: string;
        width: number;
        height: number;
        url: string;
        size: number;
    }
    export interface ITextFile {
        id: number;
        name: string;
        path: string;
        size: number;
        content: string;
    }
    export interface IZipFile {
        id: number;
        name: string;
        path: string;
        size: number;
        count: number;
    }

    export interface IShortcut {
        id: number;
        name: string;
        path: string;
        target: IBucket;
    }

    export function generate(
        limit: number = 3,
        level: number = 0,
    ): ArrayRecursiveUnionImplicit {
        const files = () => [
            generate_image_file(),
            generate_text_file(),
            generate_zip_file(),
        ];
        const directory = () => generate_directory(limit, level + 1);

        const output: ArrayRecursiveUnionImplicit = [
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
            ...generate_bucket(),
        };
    }
    function generate_image_file(): IImageFile {
        return {
            width: RandomGenerator.integer(),
            height: RandomGenerator.integer(),
            url: RandomGenerator.string(),
            ...generate_file(),
        };
    }
    function generate_text_file(): ITextFile {
        return {
            content: RandomGenerator.string(),
            ...generate_file(),
        };
    }
    function generate_zip_file(): IZipFile {
        return {
            count: RandomGenerator.integer(),
            ...generate_file(),
        };
    }
    function generate_shortcut(target: IBucket): IShortcut {
        return {
            ...generate_bucket(),
            target,
        };
    }

    function generate_bucket() {
        return {
            id: RandomGenerator.integer(),
            name: RandomGenerator.string(),
            path: RandomGenerator.string(),
        };
    }
    function generate_file() {
        return {
            ...generate_bucket(),
            size: RandomGenerator.integer(),
        };
    }
}
