import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_random_TupleHierarchical = (): void =>
  _test_random("TupleHierarchical")<TupleHierarchical>(TupleHierarchical)({
    random: () =>
      typia.random<TupleHierarchical>((TupleHierarchical as any).RANDOM),
    assert: typia.createAssert<TupleHierarchical>(),
  });
