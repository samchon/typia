import typia from "../../../../src";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";
import { _test_isClone } from "../../../internal/_test_isClone";
export const test_createIsClone_ObjectLiteralProperty = _test_isClone("ObjectLiteralProperty", ObjectLiteralProperty.generate, (input: any): typia.Primitive<ObjectLiteralProperty> | null => { const is = (input: any): input is ObjectLiteralProperty => {
    return "object" === typeof input && null !== input && ("string" === typeof (input as any)["something-interesting-do-you-want?"] && "string" === typeof (input as any)["or-something-crazy-do-you-want?"]);
}; const clone = (input: ObjectLiteralProperty): typia.Primitive<ObjectLiteralProperty> => {
    const $co0 = (input: any): any => ({
        "something-interesting-do-you-want?": input["something-interesting-do-you-want?"] as any,
        "or-something-crazy-do-you-want?": input["or-something-crazy-do-you-want?"] as any
    });
    return "object" === typeof input && null !== input ? $co0(input) : input as any;
}; if (!is(input))
    return null; const output = clone(input); return output; }, ObjectLiteralProperty.SPOILERS);
