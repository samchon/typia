import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_createRandom_TypeTagTypeUnion = (): void => _test_random("TypeTagTypeUnion")<TypeTagTypeUnion>(
    TypeTagTypeUnion
)({
  random: typia.createRandom<TypeTagTypeUnion>((TypeTagTypeUnion as any).RANDOM),
  assert: typia.createAssert<TypeTagTypeUnion>(),
});
