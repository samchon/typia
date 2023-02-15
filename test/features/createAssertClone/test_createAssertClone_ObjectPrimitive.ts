import typia from "typia";

import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ObjectPrimitive = _test_assertClone(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    typia.createAssertClone<ObjectPrimitive>(),
    ObjectPrimitive.SPOILERS,
);
