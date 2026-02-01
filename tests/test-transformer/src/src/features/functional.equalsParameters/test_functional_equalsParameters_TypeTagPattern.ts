import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_equalsParameters_TypeTagPattern = (): void => _test_functional_equalsParameters(
  "TypeTagPattern"
)(TypeTagPattern)(
  (p: (input: TypeTagPattern) => TypeTagPattern) => typia.functional.equalsParameters(p),
)