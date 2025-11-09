import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_random_ArrayRepeatedUnionWithTuple = (): void =>
  _test_random("ArrayRepeatedUnionWithTuple")<ArrayRepeatedUnionWithTuple>(
    ArrayRepeatedUnionWithTuple,
  )({
    random: () =>
      typia.random<ArrayRepeatedUnionWithTuple>(
        (ArrayRepeatedUnionWithTuple as any).RANDOM,
      ),
    assert: typia.createAssert<ArrayRepeatedUnionWithTuple>(),
  });
