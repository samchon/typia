import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_TypeTagCustom = (): void => _test_functional_assertParameters(CustomGuardError)(
  "TypeTagCustom"
)(TypeTagCustom)(
  (p: (input: TypeTagCustom) => TypeTagCustom) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)