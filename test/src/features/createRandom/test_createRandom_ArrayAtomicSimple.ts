import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_createRandom_ArrayAtomicSimple = (): void => _test_random("ArrayAtomicSimple")<ArrayAtomicSimple>(
    ArrayAtomicSimple
)({
  random: typia.createRandom<ArrayAtomicSimple>((ArrayAtomicSimple as any).RANDOM),
  assert: typia.createAssert<ArrayAtomicSimple>(),
});
