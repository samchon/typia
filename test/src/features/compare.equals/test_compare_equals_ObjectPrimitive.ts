import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_compare_equals_ObjectPrimitive = _test_compare_equals(
    "ObjectPrimitive",
)<ObjectPrimitive>(
    ObjectPrimitive
)((a, b) => typia.compare.equals<ObjectPrimitive>(a, b));
