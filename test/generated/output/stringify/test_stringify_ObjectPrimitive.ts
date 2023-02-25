import typia from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_stringify } from "../internal/_test_stringify";
export const test_stringify_ObjectPrimitive = _test_stringify("ObjectPrimitive", ObjectPrimitive.generate, (input) => ((input: Primitive<IArticle>): string => {
    return undefined !== input ? JSON.stringify(input) : undefined;
})(input));
