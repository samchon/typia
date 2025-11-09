import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { FunctionalValue } from "../../structures/FunctionalValue";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_FunctionalValue = (): void => _test_functional_assertFunction(CustomGuardError)(
  "FunctionalValue"
)(FunctionalValue)(
  (p: (input: FunctionalValue) => FunctionalValue) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)