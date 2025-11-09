import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_validateFunction_TypeTagDefault = (): void => _test_functional_validateFunction(
  "TypeTagDefault"
)(TypeTagDefault)(
  (p: (input: TypeTagDefault) => TypeTagDefault) => typia.functional.validateFunction(p),
)