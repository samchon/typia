import typia from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_assert } from "../internal/_test_assert";
export const test_createAssert_ObjectPrimitive = _test_assert("ObjectPrimitive", ObjectPrimitive.generate, (input: any) => {
    ((input: any, _path: string, _exceptionable: boolean): input is Primitive<IArticle> => {
        return true;
    })(input, "$input", true);
    return input as ObjectPrimitive;
}, ObjectPrimitive.SPOILERS);
