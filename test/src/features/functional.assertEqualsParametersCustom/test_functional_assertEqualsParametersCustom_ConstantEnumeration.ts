import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersCustom_ConstantEnumeration = (): void => _test_functional_assertEqualsParameters(CustomGuardError)(
  "ConstantEnumeration"
)(ConstantEnumeration)(
  (p: (input: ConstantEnumeration) => ConstantEnumeration) => typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)