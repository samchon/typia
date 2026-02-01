import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_misc_createValidatePrune_ObjectUnionNonPredictable = (): void => _test_misc_validatePrune(
    "ObjectUnionNonPredictable",
)<ObjectUnionNonPredictable>(
    ObjectUnionNonPredictable
)(typia.misc.createValidatePrune<ObjectUnionNonPredictable>());
