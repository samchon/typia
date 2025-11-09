import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_ObjectUnionImplicit = (): void => _test_misc_assertPrune(CustomGuardError)(
    "ObjectUnionImplicit",
)<ObjectUnionImplicit>(
    ObjectUnionImplicit
)(typia.misc.createAssertPrune<ObjectUnionImplicit>((p) => new CustomGuardError(p)));
