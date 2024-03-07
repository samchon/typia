import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParametersAsync_DynamicEnumeration =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "DynamicEnumeration",
  )(DynamicEnumeration)(
    (p: (input: DynamicEnumeration) => Promise<DynamicEnumeration>) =>
      typia.functional.assertEqualsParameters(p),
  );
