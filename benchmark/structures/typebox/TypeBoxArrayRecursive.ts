import { Type } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";

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

export const __TypeBoxArrayRecursive = Category;
export const TypeBoxArrayRecursive = TypeCompiler.Compile(
    __TypeBoxArrayRecursive,
);
