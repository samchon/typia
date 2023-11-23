import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_createRandom_TypeTagRangeBigInt = _test_random(
  "TypeTagRangeBigInt",
)<TypeTagRangeBigInt>(TypeTagRangeBigInt)({
  random: typia.createRandom<TypeTagRangeBigInt>(
    (TypeTagRangeBigInt as any).RANDOM,
  ),
  assert: typia.createAssert<TypeTagRangeBigInt>(),
});
