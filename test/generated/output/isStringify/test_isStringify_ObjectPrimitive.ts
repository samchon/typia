import typia from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_isStringify_ObjectPrimitive = _test_isStringify("ObjectPrimitive", ObjectPrimitive.generate, (input) => ((input: Primitive<IArticle>): string | null => { const is = (input: any): input is Primitive<IArticle> => {
    return true;
}; const stringify = (input: Primitive<IArticle>): string => {
    return undefined !== input ? JSON.stringify(input) : undefined;
}; return is(input) ? stringify(input) : null; })(input), ObjectPrimitive.SPOILERS);
