import { TSchema, Type } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";

const ImageFile = Type.Object({
    id: Type.Number(),
    name: Type.String(),
    path: Type.String(),
    width: Type.Number(),
    height: Type.Number(),
    url: Type.String(),
    size: Type.Number(),
});

const TextFile = Type.Object({
    id: Type.Number(),
    name: Type.String(),
    path: Type.String(),
    size: Type.Number(),
    content: Type.String(),
});

const ZipFile = Type.Object({
    id: Type.Number(),
    name: Type.String(),
    path: Type.String(),
    size: Type.Number(),
    count: Type.Number(),
});

const Shortcut = <T extends TSchema>(bucket: T) =>
    Type.Object({
        id: Type.Number(),
        name: Type.String(),
        path: Type.String(),
        target: bucket,
    });

const Directory = (bucket: TSchema) =>
    Type.Object({
        id: Type.Number(),
        name: Type.String(),
        path: Type.String(),
        children: Type.Array(bucket),
    });

const Bucket = Type.Recursive((Bucket) =>
    Type.Union([
        ImageFile,
        TextFile,
        ZipFile,
        Shortcut(Bucket),
        Directory(Bucket),
    ]),
);

export const __TypeBoxArrayRecursiveUnionImplicit = Type.Array(Bucket);
export const TypeBoxArrayRecursiveUnionImplicit = TypeCompiler.Compile(
    __TypeBoxArrayRecursiveUnionImplicit,
);
