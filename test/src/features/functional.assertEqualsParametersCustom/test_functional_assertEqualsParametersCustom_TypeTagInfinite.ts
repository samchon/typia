import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersCustom_TypeTagInfinite = (): void => _test_functional_assertEqualsParameters(CustomGuardError)(
  "TypeTagInfinite"
)(TypeTagInfinite)(
  (p: (input: TypeTagInfinite) => TypeTagInfinite) => typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)