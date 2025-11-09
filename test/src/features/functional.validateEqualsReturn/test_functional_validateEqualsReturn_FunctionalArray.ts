import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_validateEqualsReturn_FunctionalArray = (): void => _test_functional_validateEqualsReturn(
  "FunctionalArray"
)(FunctionalArray)(
  (p: (input: FunctionalArray) => FunctionalArray) => typia.functional.validateEqualsReturn(p),
)