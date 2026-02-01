import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_createRandom_TypeTagLength = (): void => _test_random("TypeTagLength")<TypeTagLength>(
    TypeTagLength
)({
  random: typia.createRandom<TypeTagLength>((TypeTagLength as any).RANDOM),
  assert: typia.createAssert<TypeTagLength>(),
});
