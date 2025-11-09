import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

import { TypeGuardError } from "typia";

export const test_misc_assertPrune_ObjectUnionExplicit = (): void => _test_misc_assertPrune(TypeGuardError)(
    "ObjectUnionExplicit",
)<ObjectUnionExplicit>(
    ObjectUnionExplicit
)((input) => typia.misc.assertPrune<ObjectUnionExplicit>(input));
