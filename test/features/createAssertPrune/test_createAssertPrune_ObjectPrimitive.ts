import typia from "../../../src";

import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_assertPrune } from "../../internal/_test_assertPrune";

export const test_createAssertPrune_ObjectPrimitive = _test_assertPrune(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    typia.createAssertPrune<ObjectPrimitive>(),
    ObjectPrimitive.SPOILERS,
);
