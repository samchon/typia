import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_ArrayMatrix =
  _test_functional_assertParametersAsync(CustomGuardError)("ArrayMatrix")(
    ArrayMatrix,
  )((p: (input: ArrayMatrix) => Promise<ArrayMatrix>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
