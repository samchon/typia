import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_misc_prune_ObjectUnionNonPredictable = _test_misc_prune(
  "ObjectUnionNonPredictable",
)<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)((input) =>
  typia.misc.prune<ObjectUnionNonPredictable>(input),
);
