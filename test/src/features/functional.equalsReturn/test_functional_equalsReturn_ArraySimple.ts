import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_equalsReturn_ArraySimple = _test_functional_equalsReturn(
  "ArraySimple"
)(ArraySimple)(
  (p: (input: ArraySimple) => ArraySimple) => typia.functional.equalsReturn(p),
)