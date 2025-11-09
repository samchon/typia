import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_ConstantConstEnumeration = (): Promise<void> => _test_functional_assertFunctionAsync(CustomGuardError)(
  "ConstantConstEnumeration"
)(ConstantConstEnumeration)(
  (p: (input: ConstantConstEnumeration) => Promise<ConstantConstEnumeration>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)