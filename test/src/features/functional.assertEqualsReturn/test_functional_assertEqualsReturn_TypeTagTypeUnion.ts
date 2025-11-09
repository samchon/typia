import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturn_TypeTagTypeUnion = (): void => _test_functional_assertEqualsReturn(TypeGuardError)(
  "TypeTagTypeUnion"
)(TypeTagTypeUnion)(
  (p: (input: TypeTagTypeUnion) => TypeTagTypeUnion) => typia.functional.assertEqualsReturn(p),
)