import { Type } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";

const Timestamp = Type.Object(
    {
        time: Type.Number(),
        zone: Type.Number(),
    },
    { additionalProperties: Type.Undefined() },
);

const Category = Type.Recursive((Category) =>
    Type.Object(
        {
            children: Type.Array(Category),
            id: Type.Number(),
            code: Type.String(),
            sequence: Type.Number(),
            created_at: Timestamp,
        },
        { additionalProperties: Type.Undefined() },
    ),
);

export const __TypeBoxArrayRecursiveEquals = Category;
export const TypeBoxArrayRecursiveEquals = TypeCompiler.Compile(
    __TypeBoxArrayRecursiveEquals,
);
