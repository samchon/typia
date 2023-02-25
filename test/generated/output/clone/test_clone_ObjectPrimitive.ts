import typia from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_clone } from "../internal/_test_clone";
export const test_clone_ObjectPrimitive = _test_clone("ObjectPrimitive", ObjectPrimitive.generate, (input) => ((input: Primitive<IArticle>): typia.Primitive<Primitive<IArticle>> => {
    const $any = (typia.clone as any).any;
    return $any(input);
})(input));
