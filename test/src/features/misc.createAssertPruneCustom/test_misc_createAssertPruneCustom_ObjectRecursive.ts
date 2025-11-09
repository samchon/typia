import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_ObjectRecursive = (): void => _test_misc_assertPrune(CustomGuardError)(
    "ObjectRecursive",
)<ObjectRecursive>(
    ObjectRecursive
)(typia.misc.createAssertPrune<ObjectRecursive>((p) => new CustomGuardError(p)));
