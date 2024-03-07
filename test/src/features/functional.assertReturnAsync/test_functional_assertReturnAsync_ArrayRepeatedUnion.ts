import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_ArrayRepeatedUnion =
  _test_functional_assertReturnAsync(TypeGuardError)("ArrayRepeatedUnion")(
    ArrayRepeatedUnion,
  )((p: (input: ArrayRepeatedUnion) => Promise<ArrayRepeatedUnion>) =>
    typia.functional.assertReturn(p),
  );
