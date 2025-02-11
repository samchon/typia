import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_TypeTagMatrix = _test_functional_assertFunctionAsync(TypeGuardError)(
  "TypeTagMatrix"
)(TypeTagMatrix)(
  (p: (input: TypeTagMatrix) => Promise<TypeTagMatrix>) =>
    typia.functional.assertFunction(p),
)