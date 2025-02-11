import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_createRandom_TypeTagInfinite = _test_random("TypeTagInfinite")<TypeTagInfinite>(
    TypeTagInfinite
)({
  random: typia.createRandom<TypeTagInfinite>((TypeTagInfinite as any).RANDOM),
  assert: typia.createAssert<TypeTagInfinite>(),
});
