import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_TypeTagDefault = (): void => _test_functional_assertEqualsFunction(TypeGuardError)(
  "TypeTagDefault"
)(TypeTagDefault)(
  (p: (input: TypeTagDefault) => TypeTagDefault) => typia.functional.assertEqualsFunction(p),
)