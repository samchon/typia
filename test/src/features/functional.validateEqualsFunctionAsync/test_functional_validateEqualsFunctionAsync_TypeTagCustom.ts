import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_validateEqualsFunctionAsync_TypeTagCustom = _test_functional_validateEqualsFunctionAsync(
  "TypeTagCustom"
)(TypeTagCustom)(
  (p: (input: TypeTagCustom) => Promise<TypeTagCustom>) =>
    typia.functional.validateEqualsFunction(p),
)