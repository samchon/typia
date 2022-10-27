import { Type } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";

const Timestamp = Type.Object(
    {
        time: Type.Number(),
        zone: Type.Number(),
    },
    { additionalProperties: Type.Undefined() },
);

const Department = Type.Recursive((Department) =>
    Type.Object(
        {
            parent: Type.Union([Department, Type.Null()]),
            id: Type.Number(),
            code: Type.String(),
            name: Type.String(),
            sequence: Type.Number(),
            created_at: Timestamp,
        },
        { additionalProperties: Type.Undefined() },
    ),
);

export const __TypeBoxObjectRecursiveEquals = Department;
export const TypeBoxObjectRecursiveEquals = TypeCompiler.Compile(
    __TypeBoxObjectRecursiveEquals,
);
