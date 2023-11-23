import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_assertGuardEquals_ObjectUnionNonPredictable =
  _test_assertGuardEquals(
    "ObjectUnionNonPredictable",
  )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)((input) =>
    typia.assertGuardEquals<ObjectUnionNonPredictable>(input),
  );
