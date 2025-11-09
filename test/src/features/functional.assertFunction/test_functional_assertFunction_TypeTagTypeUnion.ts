import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertFunction_TypeTagTypeUnion = (): void => _test_functional_assertFunction(TypeGuardError)(
  "TypeTagTypeUnion"
)(TypeTagTypeUnion)(
  (p: (input: TypeTagTypeUnion) => TypeTagTypeUnion) => typia.functional.assertFunction(p),
)