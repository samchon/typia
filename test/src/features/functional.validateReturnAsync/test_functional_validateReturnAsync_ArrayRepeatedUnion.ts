import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_functional_validateReturnAsync_ArrayRepeatedUnion =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("ArrayRepeatedUnion")(
      ArrayRepeatedUnion,
    )((p: (input: ArrayRepeatedUnion) => Promise<ArrayRepeatedUnion>) =>
      typia.functional.validateReturn(p),
    );
