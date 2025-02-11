import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_createRandom_TypeTagFormat = _test_random(
  "TypeTagFormat",
)<TypeTagFormat>(TypeTagFormat)({
  random: typia.createRandom<TypeTagFormat>((TypeTagFormat as any).RANDOM),
  assert: typia.createAssert<TypeTagFormat>(),
});
