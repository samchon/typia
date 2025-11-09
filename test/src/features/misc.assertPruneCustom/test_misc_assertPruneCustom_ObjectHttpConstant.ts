import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_ObjectHttpConstant = (): void => _test_misc_assertPrune(CustomGuardError)(
    "ObjectHttpConstant",
)<ObjectHttpConstant>(
    ObjectHttpConstant
)((input) => typia.misc.assertPrune<ObjectHttpConstant>(input, (p) => new CustomGuardError(p)));
