import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

import { TypeGuardError } from "typia";

export const test_assertEquals_ObjectRecursive = _test_assertEquals(TypeGuardError)(
    "ObjectRecursive",
)<ObjectRecursive>(
    ObjectRecursive
)((input) => typia.assertEquals<ObjectRecursive>(input));
