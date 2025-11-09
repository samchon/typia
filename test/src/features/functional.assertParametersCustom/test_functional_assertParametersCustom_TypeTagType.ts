import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TypeTagType } from "../../structures/TypeTagType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_TypeTagType = (): void => _test_functional_assertParameters(CustomGuardError)(
  "TypeTagType"
)(TypeTagType)(
  (p: (input: TypeTagType) => TypeTagType) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)