import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_random_TypeTagPattern = (): void => _test_random("TypeTagPattern")<TypeTagPattern>(
    TypeTagPattern
)({
  random: () => typia.random<TypeTagPattern>((TypeTagPattern as any).RANDOM),
  assert: typia.createAssert<TypeTagPattern>(),
});
