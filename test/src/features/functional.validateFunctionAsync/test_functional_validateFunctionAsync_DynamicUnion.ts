import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_validateFunctionAsync_DynamicUnion =
  _test_functional_validateFunctionAsync("DynamicUnion")(DynamicUnion)(
    (p: (input: DynamicUnion) => Promise<DynamicUnion>) =>
      typia.functional.validateFunction(p),
  );
