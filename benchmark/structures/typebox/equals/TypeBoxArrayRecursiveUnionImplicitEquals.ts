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
    },
    { additionalProperties: Type.Undefined() },
);

const Shortcut = <T extends TSchema>(bucket: T) =>
    Type.Object(
        {
            id: Type.Number(),
            name: Type.String(),
            path: Type.String(),
            target: bucket,
        },
        { additionalProperties: Type.Undefined() },
    );

const Directory = (bucket: TSchema) =>
    Type.Object(
        {
            id: Type.Number(),
            name: Type.String(),
            path: Type.String(),
            children: Type.Array(bucket),
        },
        { additionalProperties: Type.Undefined() },
    );

const SharedDirectory = (bucket: TSchema) =>
    Type.Object(
        {
            id: Type.Number(),
            name: Type.String(),
            path: Type.String(),
            children: Type.Array(bucket),
            access: Type.Union([Type.Literal("read"), Type.Literal("write")]),
        },
        { additionalProperties: Type.Undefined() },
    );

const Bucket = Type.Recursive((bucket) =>
    Type.Union([
        ImageFile,
        TextFile,
        ZipFile,
        Shortcut(bucket),
        Directory(bucket),
        SharedDirectory(bucket),
    ]),
);

export const __TypeBoxArrayRecursiveUnionImplicitEquals = Type.Array(Bucket);
export const TypeBoxArrayRecursiveUnionImplicitEquals = TypeCompiler.Compile(
    __TypeBoxArrayRecursiveUnionImplicitEquals,
);
