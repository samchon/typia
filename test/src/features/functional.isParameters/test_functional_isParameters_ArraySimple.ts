import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_isParameters_ArraySimple = (): void => _test_functional_isParameters(
  "ArraySimple"
)(ArraySimple)(
  (p: (input: ArraySimple) => ArraySimple) => typia.functional.isParameters(p),
)