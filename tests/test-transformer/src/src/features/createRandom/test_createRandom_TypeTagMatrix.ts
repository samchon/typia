import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_createRandom_TypeTagMatrix = (): void => _test_random("TypeTagMatrix")<TypeTagMatrix>(
    TypeTagMatrix
)({
  random: typia.createRandom<TypeTagMatrix>((TypeTagMatrix as any).RANDOM),
  assert: typia.createAssert<TypeTagMatrix>(),
});
