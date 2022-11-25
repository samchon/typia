import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ObjectPrimitive = _test_assert(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    (input) => TSON.assert(input),
    ObjectPrimitive.SPOILERS,
);