import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_functional_assertEqualsParametersAsync_ConstantConstEnumeration =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(TypeGuardError)(
      "ConstantConstEnumeration",
    )(ConstantConstEnumeration)(
      (
        p: (
          input: ConstantConstEnumeration,
        ) => Promise<ConstantConstEnumeration>,
      ) => typia.functional.assertEqualsParameters(p),
    );
