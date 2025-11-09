import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturn_TypeTagNaN = (): void => _test_functional_assertEqualsReturn(TypeGuardError)(
  "TypeTagNaN"
)(TypeTagNaN)(
  (p: (input: TypeTagNaN) => TypeTagNaN) => typia.functional.assertEqualsReturn(p),
)