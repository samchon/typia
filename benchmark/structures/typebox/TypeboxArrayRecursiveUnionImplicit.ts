import { TSchema, Type } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";
import { TypeSystemPolicy } from "@sinclair/typebox/system";

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

const SharedDirectory = (bucket: TSchema) =>
  Type.Object({
    id: Type.Number(),
    name: Type.String(),
    path: Type.String(),
    children: Type.Array(bucket),
    access: Type.Union([Type.Literal("read"), Type.Literal("write")]),
  });

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

TypeSystemPolicy.AllowArrayObject = true;
TypeSystemPolicy.AllowNaN = true;

export const __TypeboxArrayRecursiveUnionImplicit = Type.Array(Bucket);
export const TypeboxArrayRecursiveUnionImplicit = TypeCompiler.Compile(
  __TypeboxArrayRecursiveUnionImplicit,
);
