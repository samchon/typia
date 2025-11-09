import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunctionAsync_TypeTagInfinite = (): Promise<void> => _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
  "TypeTagInfinite"
)(TypeTagInfinite)(
  (p: (input: TypeTagInfinite) => Promise<TypeTagInfinite>) =>
    typia.functional.assertEqualsFunction(p),
)