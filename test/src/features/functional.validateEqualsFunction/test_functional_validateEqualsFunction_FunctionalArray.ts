import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_validateEqualsFunction_FunctionalArray = _test_functional_validateEqualsFunction(
  "FunctionalArray"
)(FunctionalArray)(
  (p: (input: FunctionalArray) => FunctionalArray) => typia.functional.validateEqualsFunction(p),
)