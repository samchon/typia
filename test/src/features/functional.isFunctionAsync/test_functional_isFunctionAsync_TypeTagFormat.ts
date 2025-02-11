import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_isFunctionAsync_TypeTagFormat = _test_functional_isFunctionAsync(
  "TypeTagFormat"
)(TypeTagFormat)(
  (p: (input: TypeTagFormat) => Promise<TypeTagFormat>) =>
    typia.functional.isFunction(p),
)