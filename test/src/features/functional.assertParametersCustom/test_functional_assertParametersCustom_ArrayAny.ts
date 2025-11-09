import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArrayAny } from "../../structures/ArrayAny";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_ArrayAny = (): void => _test_functional_assertParameters(CustomGuardError)(
  "ArrayAny"
)(ArrayAny)(
  (p: (input: ArrayAny) => ArrayAny) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)