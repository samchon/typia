import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_functional_validateReturn_ArrayRepeatedUnionWithTuple =
  (): void =>
    _test_functional_validateReturn("ArrayRepeatedUnionWithTuple")(
      ArrayRepeatedUnionWithTuple,
    )(
      (
        p: (input: ArrayRepeatedUnionWithTuple) => ArrayRepeatedUnionWithTuple,
      ) => typia.functional.validateReturn(p),
    );
