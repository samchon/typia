import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_TypeTagInfinite = (): void => _test_functional_assertParameters(CustomGuardError)(
  "TypeTagInfinite"
)(TypeTagInfinite)(
  (p: (input: TypeTagInfinite) => TypeTagInfinite) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)