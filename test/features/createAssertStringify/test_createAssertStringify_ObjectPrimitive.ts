import typia from "typia";

import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ObjectPrimitive = _test_assertStringify(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    typia.createAssertStringify<ObjectPrimitive>(),
    ObjectPrimitive.SPOILERS,
);
