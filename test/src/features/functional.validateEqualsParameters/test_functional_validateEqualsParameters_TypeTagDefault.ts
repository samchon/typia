import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_validateEqualsParameters_TypeTagDefault = (): void => _test_functional_validateEqualsParameters(
  "TypeTagDefault"
)(TypeTagDefault)(
  (p: (input: TypeTagDefault) => TypeTagDefault) => typia.functional.validateEqualsParameters(p),
)