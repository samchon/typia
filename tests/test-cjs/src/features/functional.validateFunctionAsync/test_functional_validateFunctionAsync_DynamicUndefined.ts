import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_functional_validateFunctionAsync_DynamicUndefined =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("DynamicUndefined")(
      DynamicUndefined,
    )((p: (input: DynamicUndefined) => Promise<DynamicUndefined>) =>
      typia.functional.validateFunction(p),
    );
