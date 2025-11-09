import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_functional_validateEqualsParameters_TypeTagInfinite = (): void => _test_functional_validateEqualsParameters(
  "TypeTagInfinite"
)(TypeTagInfinite)(
  (p: (input: TypeTagInfinite) => TypeTagInfinite) => typia.functional.validateEqualsParameters(p),
)