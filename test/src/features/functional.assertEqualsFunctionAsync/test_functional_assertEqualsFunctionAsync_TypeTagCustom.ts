import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunctionAsync_TypeTagCustom = (): Promise<void> => _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
  "TypeTagCustom"
)(TypeTagCustom)(
  (p: (input: TypeTagCustom) => Promise<TypeTagCustom>) =>
    typia.functional.assertEqualsFunction(p),
)