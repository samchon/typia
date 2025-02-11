import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_validateEqualsFunctionAsync_TypeTagFormat = _test_functional_validateEqualsFunctionAsync(
  "TypeTagFormat"
)(TypeTagFormat)(
  (p: (input: TypeTagFormat) => Promise<TypeTagFormat>) =>
    typia.functional.validateEqualsFunction(p),
)