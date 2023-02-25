import typia from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_clone } from "../internal/_test_clone";
export const test_createClone_ObjectLiteralType = _test_clone("ObjectLiteralType", ObjectLiteralType.generate, (input: { id: string; name: string; age: number; }): typia.Primitive<{ id: string; name: string; age: number; }> => {
    const $co0 = (input: any) => ({
        id: input.id,
        name: input.name,
        age: input.age
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
});
