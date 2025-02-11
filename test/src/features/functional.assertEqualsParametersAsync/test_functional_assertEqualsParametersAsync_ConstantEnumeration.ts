import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_functional_assertEqualsParametersAsync_ConstantEnumeration =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "ConstantEnumeration",
  )(ConstantEnumeration)(
    (p: (input: ConstantEnumeration) => Promise<ConstantEnumeration>) =>
      typia.functional.assertEqualsParameters(p),
  );
