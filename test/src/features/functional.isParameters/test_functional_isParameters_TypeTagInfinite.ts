import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_functional_isParameters_TypeTagInfinite = (): void => _test_functional_isParameters(
  "TypeTagInfinite"
)(TypeTagInfinite)(
  (p: (input: TypeTagInfinite) => TypeTagInfinite) => typia.functional.isParameters(p),
)