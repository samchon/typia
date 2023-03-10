import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_createAssertPrune_ObjectPrimitive = _test_assertPrune(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    typia.createAssertPrune<ObjectPrimitive>(),
    ObjectPrimitive.SPOILERS,
);
