import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunctionAsync_TypeTagObjectUnion = (): Promise<void> => _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
  "TypeTagObjectUnion"
)(TypeTagObjectUnion)(
  (p: (input: TypeTagObjectUnion) => Promise<TypeTagObjectUnion>) =>
    typia.functional.assertEqualsFunction(p),
)