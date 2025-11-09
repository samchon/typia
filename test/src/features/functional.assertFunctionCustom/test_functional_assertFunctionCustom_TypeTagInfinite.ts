import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_TypeTagInfinite = (): void => _test_functional_assertFunction(CustomGuardError)(
  "TypeTagInfinite"
)(TypeTagInfinite)(
  (p: (input: TypeTagInfinite) => TypeTagInfinite) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)