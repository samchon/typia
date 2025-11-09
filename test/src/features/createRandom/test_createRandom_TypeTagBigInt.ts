import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_createRandom_TypeTagBigInt = (): void => _test_random("TypeTagBigInt")<TypeTagBigInt>(
    TypeTagBigInt
)({
  random: typia.createRandom<TypeTagBigInt>((TypeTagBigInt as any).RANDOM),
  assert: typia.createAssert<TypeTagBigInt>(),
});
