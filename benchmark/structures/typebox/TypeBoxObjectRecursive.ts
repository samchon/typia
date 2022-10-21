import { Type } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";

const Timestamp = Type.Object({
    time: Type.Number(),
    zone: Type.Number(),
});

const Department = Type.Recursive((Department) =>
    Type.Object({
        parent: Type.Union([Department, Type.Null()]),
        id: Type.Number(),
        code: Type.String(),
        name: Type.String(),
        sequence: Type.Number(),
        created_at: Timestamp,
    }),
);

export const __TypeBoxObjectRecursive = Department;
export const TypeBoxObjectRecursive = TypeCompiler.Compile(
    __TypeBoxObjectRecursive,
);
