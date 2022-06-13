import { RandomGenerator } from "../internal/RandomGenerator";

export type IArrayRecursiveUnion = IArrayRecursiveUnion.IBucket[];
export namespace IArrayRecursiveUnion {
    export type IBucket = IDirectory | IFile | IShortcut;
    export namespace IBucket {
        export interface IBase<Type extends string> {
            id: string;
            type: Type;
            name: string;
            path: string;
        }
    }

    export interface IDirectory extends IBucket.IBase<"directory"> {
        children: IBucket[];
    }

    export type IFile = IImageFile | ITextFile | IZipFile;
    export namespace IFile {
        export interface IBase<Extension extends string>
            extends IBucket.IBase<"file"> {
            extension: Extension;
            size: number;
        }
    }

    export interface IImageFile extends IFile.IBase<"jpg" | "png" | "gif"> {
        width: number;
        height: number;
        url: string;
    }
    export interface ITextFile extends IFile.IBase<"txt" | "md" | "ts"> {
        content: string;
    }
    export interface IZipFile extends IFile.IBase<"zip"> {
        count: number;
    }

    export interface IShortcut extends IBucket.IBase<"shortcut"> {
        target: IBucket;
        extension: "lnk";
    }

    export function generate(
        limit: number = 3,
        level: number = 0,
    ): IArrayRecursiveUnion {
        const files = () => [
            generate_image_file(),
            generate_text_file(),
            generate_zip_file(),
        ];
        const directory = () => generate_directory(limit, level + 1);

        const output: IArrayRecursiveUnion = [
            ...files(),
            ...files().map((file) => generate_shortcut(file)),
        ];
        if (level < limit)
            output.push(directory(), generate_shortcut(directory()));
        return output;
    }

    function generate_directory(limit: number, level: number): IDirectory {
        return {
            ...generate_bucket("directory"),
            children: generate(limit, level + 1),
        };
    }
    function generate_image_file(): IImageFile {
        return {
            ...generate_file(RandomGenerator.pick(["jpg", "png", "gif"])),
            width: RandomGenerator.number(),
            height: RandomGenerator.number(),
            url: RandomGenerator.string(),
        };
    }
    function generate_text_file(): ITextFile {
        return {
            ...generate_file(RandomGenerator.pick(["txt", "md", "ts"])),
            content: RandomGenerator.string(),
        };
    }
    function generate_zip_file(): IZipFile {
        return {
            ...generate_file("zip"),
            count: RandomGenerator.number(),
        };
    }
    function generate_shortcut(target: IBucket): IShortcut {
        return {
            ...generate_bucket("shortcut"),
            extension: "lnk",
            target,
        };
    }

    function generate_bucket<Type extends string>(
        type: Type,
    ): IBucket.IBase<Type> {
        return {
            id: RandomGenerator.string(),
            type,
            name: RandomGenerator.string(),
            path: RandomGenerator.string(),
        };
    }
    function generate_file<Extension extends string>(
        extension: Extension,
    ): IFile.IBase<Extension> {
        return {
            ...generate_bucket("file"),
            extension,
            size: RandomGenerator.number(),
        };
    }
}
