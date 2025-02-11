import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_assertEqualsReturnCustom_ArrayMatrix =
  _test_functional_assertEqualsReturn(CustomGuardError)("ArrayMatrix")(
    ArrayMatrix,
  )((p: (input: ArrayMatrix) => ArrayMatrix) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
