import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersCustom_TypeTagPattern = (): void => _test_functional_assertEqualsParameters(CustomGuardError)(
  "TypeTagPattern"
)(TypeTagPattern)(
  (p: (input: TypeTagPattern) => TypeTagPattern) => typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)