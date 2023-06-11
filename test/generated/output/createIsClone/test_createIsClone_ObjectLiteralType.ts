import typia from "../../../../src";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";
import { _test_isClone } from "../../../internal/_test_isClone";
export const test_createIsClone_ObjectLiteralType = _test_isClone("ObjectLiteralType", ObjectLiteralType.generate, (input: any): typia.Primitive<ObjectLiteralType> | null => { const is = (input: any): input is ObjectLiteralType => {
    return "object" === typeof input && null !== input && ("string" === typeof (input as any).id && "string" === typeof (input as any).name && ("number" === typeof (input as any).age && Number.isFinite((input as any).age)));
}; const clone = (input: ObjectLiteralType): typia.Primitive<ObjectLiteralType> => {
    const $co0 = (input: any): any => ({
        id: input.id as any,
        name: input.name as any,
        age: input.age as any
    });
    return "object" === typeof input && null !== input ? $co0(input) : input as any;
}; if (!is(input))
    return null; const output = clone(input); return output; }, ObjectLiteralType.SPOILERS);
