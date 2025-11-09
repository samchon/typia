import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_functional_validateFunctionAsync_DynamicEnumeration =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("DynamicEnumeration")(
      DynamicEnumeration,
    )((p: (input: DynamicEnumeration) => Promise<DynamicEnumeration>) =>
      typia.functional.validateFunction(p),
    );
