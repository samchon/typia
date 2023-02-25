import typia from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_is } from "../internal/_test_is";
export const test_createIs_ObjectPrimitive = _test_is("ObjectPrimitive", ObjectPrimitive.generate, (input: any): input is Primitive<IArticle> => {
    return true;
}, ObjectPrimitive.SPOILERS);
