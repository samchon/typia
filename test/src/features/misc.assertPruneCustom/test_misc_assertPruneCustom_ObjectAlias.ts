import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectAlias } from "../../structures/ObjectAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_ObjectAlias = (): void => _test_misc_assertPrune(CustomGuardError)(
    "ObjectAlias",
)<ObjectAlias>(
    ObjectAlias
)((input) => typia.misc.assertPrune<ObjectAlias>(input, (p) => new CustomGuardError(p)));
