import typia from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_ObjectPrimitive = _test_assertPrune(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    (input) => typia.assertPrune(input),
    ObjectPrimitive.SPOILERS,
);