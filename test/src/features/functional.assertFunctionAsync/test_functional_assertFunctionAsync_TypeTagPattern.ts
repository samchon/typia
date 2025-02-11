import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_TypeTagPattern = _test_functional_assertFunctionAsync(TypeGuardError)(
  "TypeTagPattern"
)(TypeTagPattern)(
  (p: (input: TypeTagPattern) => Promise<TypeTagPattern>) =>
    typia.functional.assertFunction(p),
)