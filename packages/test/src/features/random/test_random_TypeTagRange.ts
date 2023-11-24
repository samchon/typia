import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_random_TypeTagRange = _test_random(
  "TypeTagRange",
)<TypeTagRange>(TypeTagRange)({
  random: () => typia.random<TypeTagRange>((TypeTagRange as any).RANDOM),
  assert: typia.createAssert<TypeTagRange>(),
});
