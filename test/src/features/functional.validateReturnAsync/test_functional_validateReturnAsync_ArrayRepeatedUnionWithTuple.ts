import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_functional_validateReturnAsync_ArrayRepeatedUnionWithTuple =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("ArrayRepeatedUnionWithTuple")(
      ArrayRepeatedUnionWithTuple,
    )(
      (
        p: (
          input: ArrayRepeatedUnionWithTuple,
        ) => Promise<ArrayRepeatedUnionWithTuple>,
      ) => typia.functional.validateReturn(p),
    );
