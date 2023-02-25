import typia from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_isClone } from "../internal/_test_isClone";
export const test_createIsClone_ObjectLiteralProperty = _test_isClone("ObjectLiteralProperty", ObjectLiteralProperty.generate, (input: any): typia.Primitive<ISomething> | null => { const is = (input: any): input is ISomething => {
    return "object" === typeof input && null !== input && ("string" === typeof input["something-interesting-do-you-want?"] && "string" === typeof input["or-something-crazy-do-you-want?"]);
}; const clone = (input: ISomething): typia.Primitive<ISomething> => {
    const $co0 = (input: any) => ({
        "something-interesting-do-you-want?": input["something-interesting-do-you-want?"],
        "or-something-crazy-do-you-want?": input["or-something-crazy-do-you-want?"]
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; if (!is(input))
    return null; const output = clone(input); return output; }, ObjectLiteralProperty.SPOILERS);
