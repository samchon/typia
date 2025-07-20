import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_functional_assertParametersAsync_ConstantEnumeration =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)(
      "ConstantEnumeration",
    )(ConstantEnumeration)(
      (p: (input: ConstantEnumeration) => Promise<ConstantEnumeration>) =>
        typia.functional.assertParameters(p),
    );
