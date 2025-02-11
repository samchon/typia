import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_isParameters_TypeTagPattern = _test_functional_isParameters(
  "TypeTagPattern"
)(TypeTagPattern)(
  (p: (input: TypeTagPattern) => TypeTagPattern) => typia.functional.isParameters(p),
)