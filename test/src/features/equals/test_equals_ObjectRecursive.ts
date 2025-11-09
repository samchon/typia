import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_equals_ObjectRecursive = (): void => _test_equals(
    "ObjectRecursive",
)<ObjectRecursive>(
    ObjectRecursive
)((input) => typia.equals<ObjectRecursive>(input));
