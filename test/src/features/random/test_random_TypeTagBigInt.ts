import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_random_TypeTagBigInt = (): void =>
  _test_random("TypeTagBigInt")<TypeTagBigInt>(TypeTagBigInt)({
    random: () => typia.random<TypeTagBigInt>((TypeTagBigInt as any).RANDOM),
    assert: typia.createAssert<TypeTagBigInt>(),
  });
