import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_assertEqualsReturnAsync_ArrayMatrix =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("ArrayMatrix")(
    ArrayMatrix,
  )((p: (input: ArrayMatrix) => Promise<ArrayMatrix>) =>
    typia.functional.assertEqualsReturn(p),
  );
