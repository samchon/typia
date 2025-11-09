import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectPartial } from "../../structures/ObjectPartial";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_ObjectPartial = (): void => _test_misc_assertPrune(CustomGuardError)(
    "ObjectPartial",
)<ObjectPartial>(
    ObjectPartial
)((input) => typia.misc.assertPrune<ObjectPartial>(input, (p) => new CustomGuardError(p)));
