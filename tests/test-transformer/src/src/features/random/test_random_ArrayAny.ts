import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_random_ArrayAny = (): void => _test_random("ArrayAny")<ArrayAny>(
    ArrayAny
)({
  random: () => typia.random<ArrayAny>((ArrayAny as any).RANDOM),
  assert: typia.createAssert<ArrayAny>(),
});
