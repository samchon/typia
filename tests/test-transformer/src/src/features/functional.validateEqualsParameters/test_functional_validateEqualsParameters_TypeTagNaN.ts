import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_validateEqualsParameters_TypeTagNaN = (): void => _test_functional_validateEqualsParameters(
  "TypeTagNaN"
)(TypeTagNaN)(
  (p: (input: TypeTagNaN) => TypeTagNaN) => typia.functional.validateEqualsParameters(p),
)