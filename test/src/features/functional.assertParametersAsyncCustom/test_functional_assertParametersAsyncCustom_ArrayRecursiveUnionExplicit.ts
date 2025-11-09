import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_ArrayRecursiveUnionExplicit = (): Promise<void> => _test_functional_assertParametersAsync(CustomGuardError)(
  "ArrayRecursiveUnionExplicit"
)(ArrayRecursiveUnionExplicit)(
  (p: (input: ArrayRecursiveUnionExplicit) => Promise<ArrayRecursiveUnionExplicit>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)