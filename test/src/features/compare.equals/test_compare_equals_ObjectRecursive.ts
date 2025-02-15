import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_compare_equals_ObjectRecursive = _test_compare_equals(
    "ObjectRecursive",
)<ObjectRecursive>(
    ObjectRecursive
)((a, b) => typia.compare.equals<ObjectRecursive>(a, b));
