import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_createRandom_TypeTagObjectUnion = _test_random(
  "TypeTagObjectUnion",
)<TypeTagObjectUnion>(TypeTagObjectUnion)({
  random: typia.createRandom<TypeTagObjectUnion>(
    (TypeTagObjectUnion as any).RANDOM,
  ),
  assert: typia.createAssert<TypeTagObjectUnion>(),
});
