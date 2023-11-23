import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_createAssert_ObjectUnionNonPredictable = _test_assert(
  "ObjectUnionNonPredictable",
)<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)(
  typia.createAssert<ObjectUnionNonPredictable>(),
);
