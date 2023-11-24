import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_assertGuard_ObjectUnionNonPredictable = _test_assertGuard(
  "ObjectUnionNonPredictable",
)<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)((input) =>
  typia.assertGuard<ObjectUnionNonPredictable>(input),
);
