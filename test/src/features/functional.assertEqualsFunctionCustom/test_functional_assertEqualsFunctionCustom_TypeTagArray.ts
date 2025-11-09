import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TypeTagArray } from "../../structures/TypeTagArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionCustom_TypeTagArray = (): void => _test_functional_assertEqualsFunction(CustomGuardError)(
  "TypeTagArray"
)(TypeTagArray)(
  (p: (input: TypeTagArray) => TypeTagArray) => typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)