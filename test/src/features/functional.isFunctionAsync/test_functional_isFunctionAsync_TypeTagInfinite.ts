import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_functional_isFunctionAsync_TypeTagInfinite = (): Promise<void> => _test_functional_isFunctionAsync(
  "TypeTagInfinite"
)(TypeTagInfinite)(
  (p: (input: TypeTagInfinite) => Promise<TypeTagInfinite>) =>
    typia.functional.isFunction(p),
)