import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_equalsReturn_TypeTagDefault = (): void => _test_functional_equalsReturn(
  "TypeTagDefault"
)(TypeTagDefault)(
  (p: (input: TypeTagDefault) => TypeTagDefault) => typia.functional.equalsReturn(p),
)