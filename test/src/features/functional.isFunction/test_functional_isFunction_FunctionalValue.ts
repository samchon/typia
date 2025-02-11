import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_isFunction_FunctionalValue = _test_functional_isFunction(
  "FunctionalValue"
)(FunctionalValue)(
  (p: (input: FunctionalValue) => FunctionalValue) => typia.functional.isFunction(p),
)