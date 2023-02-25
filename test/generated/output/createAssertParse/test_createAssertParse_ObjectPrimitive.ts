import typia from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_assertParse } from "../internal/_test_assertParse";
export const test_createAssertParse_ObjectPrimitive = _test_assertParse("ObjectPrimitive", ObjectPrimitive.generate, (input: string): typia.Primitive<Primitive<IArticle>> => { const assert = (input: any) => {
    ((input: any, _path: string, _exceptionable: boolean): input is Primitive<IArticle> => {
        return true;
    })(input, "$input", true);
    return input as Primitive<IArticle>;
}; input = JSON.parse(input); return assert(input); }, ObjectPrimitive.SPOILERS);
