import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_TypeTagNaN = (): void => _test_functional_assertFunction(CustomGuardError)(
  "TypeTagNaN"
)(TypeTagNaN)(
  (p: (input: TypeTagNaN) => TypeTagNaN) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)