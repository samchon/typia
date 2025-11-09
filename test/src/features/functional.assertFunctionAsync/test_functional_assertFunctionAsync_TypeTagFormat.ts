import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_TypeTagFormat = (): Promise<void> => _test_functional_assertFunctionAsync(TypeGuardError)(
  "TypeTagFormat"
)(TypeTagFormat)(
  (p: (input: TypeTagFormat) => Promise<TypeTagFormat>) =>
    typia.functional.assertFunction(p),
)