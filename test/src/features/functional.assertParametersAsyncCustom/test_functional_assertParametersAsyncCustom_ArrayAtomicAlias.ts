import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_ArrayAtomicAlias = (): Promise<void> => _test_functional_assertParametersAsync(CustomGuardError)(
  "ArrayAtomicAlias"
)(ArrayAtomicAlias)(
  (p: (input: ArrayAtomicAlias) => Promise<ArrayAtomicAlias>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)