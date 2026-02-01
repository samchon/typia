import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_isParameters_TypeTagLength = (): void => _test_functional_isParameters(
  "TypeTagLength"
)(TypeTagLength)(
  (p: (input: TypeTagLength) => TypeTagLength) => typia.functional.isParameters(p),
)