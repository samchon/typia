import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_functional_assertParametersAsyncCustom_ConstantConstEnumeration =
  _test_functional_assertParametersAsync(CustomGuardError)(
    "ConstantConstEnumeration",
  )(ConstantConstEnumeration)(
    (
      p: (input: ConstantConstEnumeration) => Promise<ConstantConstEnumeration>,
    ) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
