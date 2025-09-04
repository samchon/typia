import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_assertEqualsReturn_ArrayMatrix = (): void =>
  _test_functional_assertEqualsReturn(TypeGuardError)("ArrayMatrix")(
    ArrayMatrix,
  )((p: (input: ArrayMatrix) => ArrayMatrix) =>
    typia.functional.assertEqualsReturn(p),
  );
