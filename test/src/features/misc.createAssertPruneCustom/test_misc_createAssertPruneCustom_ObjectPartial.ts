import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectPartial } from "../../structures/ObjectPartial";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_ObjectPartial = (): void => _test_misc_assertPrune(CustomGuardError)(
    "ObjectPartial",
)<ObjectPartial>(
    ObjectPartial
)(typia.misc.createAssertPrune<ObjectPartial>((p) => new CustomGuardError(p)));
