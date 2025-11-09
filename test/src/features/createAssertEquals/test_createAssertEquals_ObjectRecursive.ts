import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_ObjectRecursive = (): void => _test_assertEquals(TypeGuardError)(
    "ObjectRecursive",
)<ObjectRecursive>(
    ObjectRecursive
)(typia.createAssertEquals<ObjectRecursive>());
