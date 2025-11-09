import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_createRandom_TypeTagDefault = (): void => _test_random("TypeTagDefault")<TypeTagDefault>(
    TypeTagDefault
)({
  random: typia.createRandom<TypeTagDefault>((TypeTagDefault as any).RANDOM),
  assert: typia.createAssert<TypeTagDefault>(),
});
