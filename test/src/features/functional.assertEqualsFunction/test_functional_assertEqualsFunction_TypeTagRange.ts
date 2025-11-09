import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TypeTagRange } from "../../structures/TypeTagRange";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_TypeTagRange = (): void => _test_functional_assertEqualsFunction(TypeGuardError)(
  "TypeTagRange"
)(TypeTagRange)(
  (p: (input: TypeTagRange) => TypeTagRange) => typia.functional.assertEqualsFunction(p),
)