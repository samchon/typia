import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_createIs_ObjectUnionNonPredictable = _test_is(
  "ObjectUnionNonPredictable",
)<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)(
  typia.createIs<ObjectUnionNonPredictable>(),
);
