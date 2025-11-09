import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_isParameters_TypeTagDefault = (): void => _test_functional_isParameters(
  "TypeTagDefault"
)(TypeTagDefault)(
  (p: (input: TypeTagDefault) => TypeTagDefault) => typia.functional.isParameters(p),
)