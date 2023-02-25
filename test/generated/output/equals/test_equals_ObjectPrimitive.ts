import typia from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_equals } from "../internal/_test_equals";
export const test_equals_ObjectPrimitive = _test_equals("ObjectPrimitive", ObjectPrimitive.generate, (input) => ((input: any, _exceptionable: boolean): input is Primitive<IArticle> => {
    return true;
})(input));
