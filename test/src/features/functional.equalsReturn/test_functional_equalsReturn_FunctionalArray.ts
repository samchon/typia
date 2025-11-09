import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_equalsReturn_FunctionalArray = (): void => _test_functional_equalsReturn(
  "FunctionalArray"
)(FunctionalArray)(
  (p: (input: FunctionalArray) => FunctionalArray) => typia.functional.equalsReturn(p),
)