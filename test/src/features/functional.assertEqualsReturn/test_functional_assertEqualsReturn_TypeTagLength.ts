import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TypeTagLength } from "../../structures/TypeTagLength";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturn_TypeTagLength = (): void => _test_functional_assertEqualsReturn(TypeGuardError)(
  "TypeTagLength"
)(TypeTagLength)(
  (p: (input: TypeTagLength) => TypeTagLength) => typia.functional.assertEqualsReturn(p),
)