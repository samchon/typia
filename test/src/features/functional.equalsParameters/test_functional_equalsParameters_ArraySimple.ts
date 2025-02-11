import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_equalsParameters_ArraySimple = _test_functional_equalsParameters(
  "ArraySimple"
)(ArraySimple)(
  (p: (input: ArraySimple) => ArraySimple) => typia.functional.equalsParameters(p),
)