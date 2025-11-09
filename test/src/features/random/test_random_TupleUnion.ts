import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_random_TupleUnion = (): void => _test_random("TupleUnion")<TupleUnion>(
    TupleUnion
)({
  random: () => typia.random<TupleUnion>((TupleUnion as any).RANDOM),
  assert: typia.createAssert<TupleUnion>(),
});
