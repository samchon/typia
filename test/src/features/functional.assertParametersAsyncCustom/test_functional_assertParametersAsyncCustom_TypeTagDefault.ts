import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_TypeTagDefault = (): Promise<void> => _test_functional_assertParametersAsync(CustomGuardError)(
  "TypeTagDefault"
)(TypeTagDefault)(
  (p: (input: TypeTagDefault) => Promise<TypeTagDefault>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)