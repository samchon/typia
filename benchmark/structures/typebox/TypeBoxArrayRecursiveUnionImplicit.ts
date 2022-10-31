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
    {
        additionalProperties: false,
    },
);

const TextFile = Type.Object(
    {
        id: Type.Number(),
        name: Type.String(),
        path: Type.String(),
        size: Type.Number(),
        content: Type.String(),
    },
    {
        additionalProperties: false,
    },
);

const ZipFile = Type.Object(
    {
        id: Type.Number(),
        name: Type.String(),
        path: Type.String(),
        size: Type.Number(),
        count: Type.Number(),
    },
    {
        additionalProperties: false,
    },
);

const Shortcut = <T extends TSchema>(bucket: T) =>
    Type.Object(
        {
            id: Type.Number(),
            name: Type.String(),
            path: Type.String(),
            target: bucket,
        },
        {
            additionalProperties: false,
        },
    );

const Directory = (bucket: TSchema) =>
    Type.Object(
        {
            id: Type.Number(),
            name: Type.String(),
            path: Type.String(),
            children: Type.Array(bucket),
        },
        {
            additionalProperties: false,
        },
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
        {
            additionalProperties: false,
        },
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

export const __TypeBoxArrayRecursiveUnionImplicit = Type.Array(Bucket);
export const TypeBoxArrayRecursiveUnionImplicit = TypeCompiler.Compile(
    __TypeBoxArrayRecursiveUnionImplicit,
);
