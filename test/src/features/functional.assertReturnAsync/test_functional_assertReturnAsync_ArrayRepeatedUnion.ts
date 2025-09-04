import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_functional_assertReturnAsync_ArrayRepeatedUnion =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("ArrayRepeatedUnion")(
      ArrayRepeatedUnion,
    )((p: (input: ArrayRepeatedUnion) => Promise<ArrayRepeatedUnion>) =>
      typia.functional.assertReturn(p),
    );
