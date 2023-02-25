import typia from "../../../src";

import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_ObjectPrimitive = _test_assertParse(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    typia.createAssertParse<ObjectPrimitive>(),
    ObjectPrimitive.SPOILERS,
);
