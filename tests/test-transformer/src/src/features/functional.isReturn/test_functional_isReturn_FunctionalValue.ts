import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_isReturn_FunctionalValue = (): void => _test_functional_isReturn(
  "FunctionalValue"
)(FunctionalValue)(
  (p: (input: FunctionalValue) => FunctionalValue) => typia.functional.isReturn(p),
)