import typia from "typia";

import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_ObjectPrimitive = _test_assertEquals(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    typia.createAssertEquals<ObjectPrimitive>(),
);
