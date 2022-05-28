import TSON from "../../src";

export function test_stringify_object_union_double(): void {
    const stringify = TSON.createStringifier<IBucket[]>();

    const top: IBucket[] = [
        {
            type: "directory",
            id: "7b1068a4-dd6e-474a-8d85-09a2d77639cb",
            name: "ixcWGOKI",
            children: [
                {
                    type: "directory",
                    id: "5883e17c-b207-46d4-ad2d-be72249711ce",
                    name: "vecQwFGS",
                    children: [],
                },
                {
                    type: "file",
                    id: "670b6556-a610-4a48-8a16-9c2da97a0d18",
                    name: "eStFddzX",
                    extension: "jpg",
                    size: 7,
                    width: 300,
                    height: 1200,
                    url: "https://github.com/samchon/typescript-json",
                },
                {
                    type: "file",
                    id: "85dc796d-9593-4833-b1a1-addc8ebf74ea",
                    name: "kTdUfwRJ",
                    extension: "ts",
                    size: 86,
                    content: 'console.log("Hello world");',
                },
                {
                    type: "file",
                    id: "8933c86a-7a1e-4d4a-b0a6-17d6896fdf89",
                    name: "NBPkefUG",
                    extension: "zip",
                    size: 22,
                    files: 20,
                },
            ],
        },
    ];
    const json: string = stringify(top);
    const expected: string = JSON.stringify(top);

    if (json !== expected)
        throw new Error(
            "Bug on TSON.createStringifier(): failed to understand the doubly repeated union object type.",
        );
}

// BUCKET & DIRECTORY
type IBucket = IDirectory | IFile;
namespace IBucket {
    export interface IBase<Type extends string> {
        type: Type;
        id: string;
        name: string;
    }
}
interface IDirectory extends IBucket.IBase<"directory"> {
    children: IBucket[];
}

// FILES
type IFile = IImageFile | ITextFile | IZipFile;
namespace IFile {
    export interface IBase<Extension extends string>
        extends IBucket.IBase<"file"> {
        extension: Extension;
        size: number;
    }
}
interface IImageFile extends IFile.IBase<"jpg" | "png" | "gif"> {
    width: number;
    height: number;
    url: string;
}
interface ITextFile extends IFile.IBase<"txt" | "md" | "ts"> {
    content: string;
}
interface IZipFile extends IFile.IBase<"zip"> {
    files: number;
}
