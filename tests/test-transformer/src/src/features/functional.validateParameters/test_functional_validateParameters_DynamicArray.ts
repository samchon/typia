import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_functional_validateParameters_DynamicArray = (): void => _test_functional_validateParameters(
  "DynamicArray"
)(DynamicArray)(
  (p: (input: DynamicArray) => DynamicArray) => typia.functional.validateParameters(p),
)