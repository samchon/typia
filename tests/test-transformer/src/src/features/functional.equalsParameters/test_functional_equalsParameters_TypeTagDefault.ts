import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_equalsParameters_TypeTagDefault = (): void => _test_functional_equalsParameters(
  "TypeTagDefault"
)(TypeTagDefault)(
  (p: (input: TypeTagDefault) => TypeTagDefault) => typia.functional.equalsParameters(p),
)