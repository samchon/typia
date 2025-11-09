import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TypeTagArray } from "../../structures/TypeTagArray";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturn_TypeTagArray = (): void => _test_functional_assertEqualsReturn(TypeGuardError)(
  "TypeTagArray"
)(TypeTagArray)(
  (p: (input: TypeTagArray) => TypeTagArray) => typia.functional.assertEqualsReturn(p),
)