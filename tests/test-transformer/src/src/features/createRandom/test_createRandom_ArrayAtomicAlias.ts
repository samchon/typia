import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_createRandom_ArrayAtomicAlias = (): void => _test_random("ArrayAtomicAlias")<ArrayAtomicAlias>(
    ArrayAtomicAlias
)({
  random: typia.createRandom<ArrayAtomicAlias>((ArrayAtomicAlias as any).RANDOM),
  assert: typia.createAssert<ArrayAtomicAlias>(),
});
