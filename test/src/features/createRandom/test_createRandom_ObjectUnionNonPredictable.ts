import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_createRandom_ObjectUnionNonPredictable = _test_random(
  "ObjectUnionNonPredictable",
)<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)({
  random: typia.createRandom<ObjectUnionNonPredictable>(
    (ObjectUnionNonPredictable as any).RANDOM,
  ),
  assert: typia.createAssert<ObjectUnionNonPredictable>(),
});
