import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_functional_validateFunctionAsync_DynamicNever =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("DynamicNever")(DynamicNever)(
      (p: (input: DynamicNever) => Promise<DynamicNever>) =>
        typia.functional.validateFunction(p),
    );
