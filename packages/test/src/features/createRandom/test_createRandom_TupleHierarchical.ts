import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_createRandom_TupleHierarchical = _test_random(
  "TupleHierarchical",
)<TupleHierarchical>(TupleHierarchical)({
  random: typia.createRandom<TupleHierarchical>(
    (TupleHierarchical as any).RANDOM,
  ),
  assert: typia.createAssert<TupleHierarchical>(),
});
