import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_createRandom_ArrayRepeatedOptional = (): void =>
  _test_random("ArrayRepeatedOptional")<ArrayRepeatedOptional>(
    ArrayRepeatedOptional,
  )({
    random: typia.createRandom<ArrayRepeatedOptional>(
      (ArrayRepeatedOptional as any).RANDOM,
    ),
    assert: typia.createAssert<ArrayRepeatedOptional>(),
  });
