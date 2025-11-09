import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_validateParameters_FunctionalArray = (): void => _test_functional_validateParameters(
  "FunctionalArray"
)(FunctionalArray)(
  (p: (input: FunctionalArray) => FunctionalArray) => typia.functional.validateParameters(p),
)