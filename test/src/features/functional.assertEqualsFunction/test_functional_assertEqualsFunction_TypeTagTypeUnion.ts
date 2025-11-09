import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_TypeTagTypeUnion = (): void => _test_functional_assertEqualsFunction(TypeGuardError)(
  "TypeTagTypeUnion"
)(TypeTagTypeUnion)(
  (p: (input: TypeTagTypeUnion) => TypeTagTypeUnion) => typia.functional.assertEqualsFunction(p),
)