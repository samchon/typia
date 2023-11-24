import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_misc_createPrune_ObjectUnionNonPredictable = _test_misc_prune(
  "ObjectUnionNonPredictable",
)<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)(
  typia.misc.createPrune<ObjectUnionNonPredictable>(),
);
