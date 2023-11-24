import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_createRandom_TypeTagNaN = _test_random(
  "TypeTagNaN",
)<TypeTagNaN>(TypeTagNaN)({
  random: typia.createRandom<TypeTagNaN>((TypeTagNaN as any).RANDOM),
  assert: typia.createAssert<TypeTagNaN>(),
});
