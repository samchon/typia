import { Type } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";
import { TypeSystem } from "@sinclair/typebox/system";

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

TypeSystem.AllowArrayObjects = true;
TypeSystem.AllowNaN = true;

export const __TypeboxObjectRecursive = Department;
export const TypeboxObjectRecursive = TypeCompiler.Compile(
    __TypeboxObjectRecursive,
);
