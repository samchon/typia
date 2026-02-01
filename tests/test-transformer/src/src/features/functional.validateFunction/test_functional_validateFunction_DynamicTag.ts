import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_validateFunction_DynamicTag = (): void => _test_functional_validateFunction(
  "DynamicTag"
)(DynamicTag)(
  (p: (input: DynamicTag) => DynamicTag) => typia.functional.validateFunction(p),
)