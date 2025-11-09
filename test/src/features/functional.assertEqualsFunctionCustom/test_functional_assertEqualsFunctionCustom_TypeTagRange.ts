import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TypeTagRange } from "../../structures/TypeTagRange";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionCustom_TypeTagRange = (): void => _test_functional_assertEqualsFunction(CustomGuardError)(
  "TypeTagRange"
)(TypeTagRange)(
  (p: (input: TypeTagRange) => TypeTagRange) => typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)