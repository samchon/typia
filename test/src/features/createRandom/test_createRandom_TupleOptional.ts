import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_createRandom_TupleOptional = (): void => _test_random("TupleOptional")<TupleOptional>(
    TupleOptional
)({
  random: typia.createRandom<TupleOptional>((TupleOptional as any).RANDOM),
  assert: typia.createAssert<TupleOptional>(),
});
