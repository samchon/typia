import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturn_TypeTagPattern = (): void => _test_functional_assertEqualsReturn(TypeGuardError)(
  "TypeTagPattern"
)(TypeTagPattern)(
  (p: (input: TypeTagPattern) => TypeTagPattern) => typia.functional.assertEqualsReturn(p),
)