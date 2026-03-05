import { Type } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";
import { TypeSystemPolicy } from "@sinclair/typebox/system";

const Timestamp = Type.Object({
  time: Type.Number(),
  zone: Type.Number(),
});

const Category = Type.Recursive((Category) =>
  Type.Object({
    children: Type.Array(Category),
    id: Type.Number(),
    code: Type.String(),
    sequence: Type.Number(),
    created_at: Timestamp,
  }),
);

TypeSystemPolicy.AllowArrayObject = true;
TypeSystemPolicy.AllowNaN = true;

export const __TypeboxArrayRecursive = Category;
export const TypeboxArrayRecursive = TypeCompiler.Compile(
  __TypeboxArrayRecursive,
);
