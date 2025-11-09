import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

import { TypeGuardError } from "typia";

export const test_misc_createAssertPrune_ObjectUnionNonPredictable = (): void => _test_misc_assertPrune(TypeGuardError)(
    "ObjectUnionNonPredictable",
)<ObjectUnionNonPredictable>(
    ObjectUnionNonPredictable
)(typia.misc.createAssertPrune<ObjectUnionNonPredictable>());
