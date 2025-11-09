import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersCustom_ArrayMatrix = (): void => _test_functional_assertEqualsParameters(CustomGuardError)(
  "ArrayMatrix"
)(ArrayMatrix)(
  (p: (input: ArrayMatrix) => ArrayMatrix) => typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)