import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectSimple } from "../../structures/ObjectSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_ObjectSimple = (): void => _test_misc_assertPrune(CustomGuardError)(
    "ObjectSimple",
)<ObjectSimple>(
    ObjectSimple
)((input) => typia.misc.assertPrune<ObjectSimple>(input, (p) => new CustomGuardError(p)));
