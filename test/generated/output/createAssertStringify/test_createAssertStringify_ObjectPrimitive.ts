import typia from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_assertStringify } from "../internal/_test_assertStringify";
export const test_createAssertStringify_ObjectPrimitive = _test_assertStringify("ObjectPrimitive", ObjectPrimitive.generate, (input: Primitive<IArticle>): string => { const assert = (input: any) => {
    ((input: any, _path: string, _exceptionable: boolean): input is Primitive<IArticle> => {
        return true;
    })(input, "$input", true);
    return input as Primitive<IArticle>;
}; const stringify = (input: Primitive<IArticle>): string => {
    return undefined !== input ? JSON.stringify(input) : undefined;
}; return stringify(assert(input)); }, ObjectPrimitive.SPOILERS);
