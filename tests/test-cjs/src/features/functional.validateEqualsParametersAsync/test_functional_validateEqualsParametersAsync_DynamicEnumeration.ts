import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_functional_validateEqualsParametersAsync_DynamicEnumeration =
  (): Promise<void> =>
    _test_functional_validateEqualsParametersAsync("DynamicEnumeration")(
      DynamicEnumeration,
    )((p: (input: DynamicEnumeration) => Promise<DynamicEnumeration>) =>
      typia.functional.validateEqualsParameters(p),
    );
