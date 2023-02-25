import typia from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_is } from "../internal/_test_is";
export const test_is_ObjectPrimitive = _test_is("ObjectPrimitive", ObjectPrimitive.generate, (input) => ((input: any): input is Primitive<IArticle> => {
    return true;
})(input), ObjectPrimitive.SPOILERS);
