import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_validateEqualsFunction_ArraySimple = (): void => _test_functional_validateEqualsFunction(
  "ArraySimple"
)(ArraySimple)(
  (p: (input: ArraySimple) => ArraySimple) => typia.functional.validateEqualsFunction(p),
)