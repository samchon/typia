import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_random_ArrayRepeatedOptional = (): void => _test_random("ArrayRepeatedOptional")<ArrayRepeatedOptional>(
    ArrayRepeatedOptional
)({
  random: () => typia.random<ArrayRepeatedOptional>((ArrayRepeatedOptional as any).RANDOM),
  assert: typia.createAssert<ArrayRepeatedOptional>(),
});
