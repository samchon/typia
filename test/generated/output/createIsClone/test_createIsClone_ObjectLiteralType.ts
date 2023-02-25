import typia from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_isClone } from "../internal/_test_isClone";
export const test_createIsClone_ObjectLiteralType = _test_isClone("ObjectLiteralType", ObjectLiteralType.generate, (input: any): typia.Primitive<{ id: string; name: string; age: number; }> | null => { const is = (input: any): input is { id: string; name: string; age: number; } => {
    return "object" === typeof input && null !== input && ("string" === typeof input.id && "string" === typeof input.name && "number" === typeof input.age);
}; const clone = (input: { id: string; name: string; age: number; }): typia.Primitive<{ id: string; name: string; age: number; }> => {
    const $co0 = (input: any) => ({
        id: input.id,
        name: input.name,
        age: input.age
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; if (!is(input))
    return null; const output = clone(input); return output; }, ObjectLiteralType.SPOILERS);
