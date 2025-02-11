import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_isParameters_TypeTagRange = _test_functional_isParameters(
  "TypeTagRange"
)(TypeTagRange)(
  (p: (input: TypeTagRange) => TypeTagRange) => typia.functional.isParameters(p),
)