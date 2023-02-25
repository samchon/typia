import typia from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_isParse } from "../internal/_test_isParse";
export const test_isParse_ObjectPrimitive = _test_isParse("ObjectPrimitive", ObjectPrimitive.generate, (input) => ((input: any): typia.Primitive<Primitive<IArticle>> => { const is = (input: any): input is Primitive<IArticle> => {
    return true;
}; input = JSON.parse(input); return is(input) ? input as any : null; })(input), ObjectPrimitive.SPOILERS);
