import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_isFunctionAsync_TypeTagCustom = _test_functional_isFunctionAsync(
  "TypeTagCustom"
)(TypeTagCustom)(
  (p: (input: TypeTagCustom) => Promise<TypeTagCustom>) =>
    typia.functional.isFunction(p),
)