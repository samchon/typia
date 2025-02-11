import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_functional_isParametersAsync_TypeTagInfinite = _test_functional_isParametersAsync(
  "TypeTagInfinite"
)(TypeTagInfinite)(
  (p: (input: TypeTagInfinite) => Promise<TypeTagInfinite>) =>
    typia.functional.isParameters(p),
)