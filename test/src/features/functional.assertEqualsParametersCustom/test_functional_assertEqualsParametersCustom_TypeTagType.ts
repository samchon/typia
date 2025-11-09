import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TypeTagType } from "../../structures/TypeTagType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersCustom_TypeTagType = (): void => _test_functional_assertEqualsParameters(CustomGuardError)(
  "TypeTagType"
)(TypeTagType)(
  (p: (input: TypeTagType) => TypeTagType) => typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)