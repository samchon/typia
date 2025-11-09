import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_ObjectGeneric = (): void => _test_misc_assertPrune(CustomGuardError)(
    "ObjectGeneric",
)<ObjectGeneric>(
    ObjectGeneric
)((input) => typia.misc.assertPrune<ObjectGeneric>(input, (p) => new CustomGuardError(p)));
