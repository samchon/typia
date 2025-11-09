import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_validateEqualsReturn_ArraySimple = (): void => _test_functional_validateEqualsReturn(
  "ArraySimple"
)(ArraySimple)(
  (p: (input: ArraySimple) => ArraySimple) => typia.functional.validateEqualsReturn(p),
)