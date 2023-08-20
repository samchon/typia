import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_assert_ObjectPrimitive = _test_assert(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    (input) => typia.assert<ObjectPrimitive>(input),
    ObjectPrimitive.SPOILERS,
);
