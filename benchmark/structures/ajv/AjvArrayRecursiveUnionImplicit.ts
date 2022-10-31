import { TSchema, Type } from "@sinclair/typebox";
import Ajv from "ajv";

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
    Type.Object(
        {
            id: Type.Number(),
            name: Type.String(),
            path: Type.String(),
            target: bucket,
        },
        {
            additionalProperties: false, // required
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
            additionalProperties: false, // required
        },
    );

const SharedDirectory = (bucket: TSchema) =>
    Type.Object({
        id: Type.Number(),
        name: Type.String(),
        path: Type.String(),
        children: Type.Array(bucket),
        access: Type.Union([Type.Literal("read"), Type.Literal("write")]),
    }); // allow superfluous properties

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

export const __AjvArrayRecursiveUnionImplicit = Type.Array(Bucket);
const ajv = new Ajv();
const validate = ajv.compile(__AjvArrayRecursiveUnionImplicit);
export const AjvArrayRecursiveUnionImplicit = {
    Check: (input: unknown) => validate(input) as boolean,
};
