import { TSchema, Type } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";

const ImageFile = Type.Object(
    {
        id: Type.Number(),
        name: Type.String(),
        path: Type.String(),
        width: Type.Number(),
        height: Type.Number(),
        url: Type.String(),
        size: Type.Number(),
        type: Type.Literal("file"),
        extension: Type.Literal("jpg"),
    },
    { additionalProperties: Type.Undefined() },
);

const TextFile = Type.Object(
    {
        id: Type.Number(),
        name: Type.String(),
        path: Type.String(),
        size: Type.Number(),
        content: Type.String(),
        type: Type.Literal("file"),
        extension: Type.Literal("txt"),
    },
    { additionalProperties: Type.Undefined() },
);

const ZipFile = Type.Object(
    {
        id: Type.Number(),
        name: Type.String(),
        path: Type.String(),
        size: Type.Number(),
        count: Type.Number(),
        type: Type.Literal("file"),
        extension: Type.Literal("zip"),
    },
    { additionalProperties: Type.Undefined() },
);

const Shortcut = <T extends TSchema>(bucket: T) =>
    Type.Object({
        id: Type.Number(),
        name: Type.String(),
        path: Type.String(),
        target: bucket,
        type: Type.Literal("file"),
        extension: Type.Literal("lnk"),
    });

const Directory = (bucket: TSchema) =>
    Type.Object(
        {
            id: Type.Number(),
            name: Type.String(),
            path: Type.String(),
            children: Type.Array(bucket),
            type: Type.Literal("directory"),
        },
        { additionalProperties: Type.Undefined() },
    );

const Bucket = Type.Recursive((Bucket) =>
    Type.Union([
        ImageFile,
        TextFile,
        ZipFile,
        Shortcut(Bucket),
        Directory(Bucket),
    ]),
);

export const __TypeBoxArrayRecursiveUnionExplicitEquals = Type.Array(Bucket);
export const TypeBoxArrayRecursiveUnionExplicitEquals = TypeCompiler.Compile(
    __TypeBoxArrayRecursiveUnionExplicitEquals,
);
