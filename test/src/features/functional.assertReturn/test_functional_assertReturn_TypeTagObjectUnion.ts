import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_TypeTagObjectUnion = (): void => _test_functional_assertReturn(TypeGuardError)(
  "TypeTagObjectUnion"
)(TypeTagObjectUnion)(
  (p: (input: TypeTagObjectUnion) => TypeTagObjectUnion) => typia.functional.assertReturn(p),
)