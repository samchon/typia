import { Type } from "@sinclair/typebox";
import Ajv from "ajv";

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

export const __AjvArrayRecursive = Category;
const ajv = new Ajv();
const validate = ajv.compile(__AjvArrayRecursive);
export const AjvArrayRecursive = {
    Check: (input: unknown) => validate(input) as boolean,
};
