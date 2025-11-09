import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ObjectRecursive = (): void => _test_assert(CustomGuardError)(
    "ObjectRecursive",
)<ObjectRecursive>(
    ObjectRecursive
)(typia.createAssert<ObjectRecursive>((p) => new CustomGuardError(p)));
