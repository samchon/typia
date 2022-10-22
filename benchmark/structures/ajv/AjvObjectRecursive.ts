import { Type } from "@sinclair/typebox";
import Ajv from "ajv";

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

export const __AjvObjectRecursive = Department;
const ajv = new Ajv();
const validate = ajv.compile(__AjvObjectRecursive);
export const AjvObjectRecursive = {
    Check: (input: unknown) => validate(input) as boolean,
};
