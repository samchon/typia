import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_functional_validateFunctionAsync_DynamicSimple = (): Promise<void> => _test_functional_validateFunctionAsync(
  "DynamicSimple"
)(DynamicSimple)(
  (p: (input: DynamicSimple) => Promise<DynamicSimple>) =>
    typia.functional.validateFunction(p),
)