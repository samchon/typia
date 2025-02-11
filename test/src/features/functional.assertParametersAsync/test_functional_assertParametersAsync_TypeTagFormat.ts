import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_TypeTagFormat = _test_functional_assertParametersAsync(TypeGuardError)(
  "TypeTagFormat"
)(TypeTagFormat)(
  (p: (input: TypeTagFormat) => Promise<TypeTagFormat>) =>
    typia.functional.assertParameters(p),
)