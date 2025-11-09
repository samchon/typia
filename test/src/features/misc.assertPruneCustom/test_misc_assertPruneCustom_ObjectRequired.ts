import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectRequired } from "../../structures/ObjectRequired";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_ObjectRequired = (): void => _test_misc_assertPrune(CustomGuardError)(
    "ObjectRequired",
)<ObjectRequired>(
    ObjectRequired
)((input) => typia.misc.assertPrune<ObjectRequired>(input, (p) => new CustomGuardError(p)));
