import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

import { TypeGuardError } from "typia";

export const test_misc_createAssertPrune_ObjectUnionImplicit = (): void => _test_misc_assertPrune(TypeGuardError)(
    "ObjectUnionImplicit",
)<ObjectUnionImplicit>(
    ObjectUnionImplicit
)(typia.misc.createAssertPrune<ObjectUnionImplicit>());
