import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersAsyncCustom_ConstantConstEnumeration = (): Promise<void> => _test_functional_assertEqualsParametersAsync(CustomGuardError)(
  "ConstantConstEnumeration"
)(ConstantConstEnumeration)(
  (p: (input: ConstantConstEnumeration) => Promise<ConstantConstEnumeration>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)