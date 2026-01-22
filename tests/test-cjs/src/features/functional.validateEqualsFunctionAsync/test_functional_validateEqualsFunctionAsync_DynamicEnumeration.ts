import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_functional_validateEqualsFunctionAsync_DynamicEnumeration =
  (): Promise<void> =>
    _test_functional_validateEqualsFunctionAsync("DynamicEnumeration")(
      DynamicEnumeration,
    )((p: (input: DynamicEnumeration) => Promise<DynamicEnumeration>) =>
      typia.functional.validateEqualsFunction(p),
    );
