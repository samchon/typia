import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_validateFunction_FunctionalArray = (): void => _test_functional_validateFunction(
  "FunctionalArray"
)(FunctionalArray)(
  (p: (input: FunctionalArray) => FunctionalArray) => typia.functional.validateFunction(p),
)