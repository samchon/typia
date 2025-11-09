import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectNullable } from "../../structures/ObjectNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_ObjectNullable = (): void => _test_misc_assertPrune(CustomGuardError)(
    "ObjectNullable",
)<ObjectNullable>(
    ObjectNullable
)(typia.misc.createAssertPrune<ObjectNullable>((p) => new CustomGuardError(p)));
