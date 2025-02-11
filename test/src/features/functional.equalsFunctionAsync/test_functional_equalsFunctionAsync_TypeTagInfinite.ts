import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_functional_equalsFunctionAsync_TypeTagInfinite = _test_functional_equalsFunctionAsync(
  "TypeTagInfinite"
)(TypeTagInfinite)(
  (p: (input: TypeTagInfinite) => Promise<TypeTagInfinite>) =>
    typia.functional.equalsFunction(p),
)