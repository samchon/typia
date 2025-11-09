import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_ArrayMatrix = (): void => _test_functional_assertParameters(CustomGuardError)(
  "ArrayMatrix"
)(ArrayMatrix)(
  (p: (input: ArrayMatrix) => ArrayMatrix) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)