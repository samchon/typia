import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_misc_assertPrune_ObjectPrimitive = _test_misc_assertPrune(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    typia.misc.createAssertPrune<ObjectPrimitive>(),
    ObjectPrimitive.SPOILERS,
);
