import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_ArrayRecursiveUnionExplicit = (): void => _test_functional_assertParameters(CustomGuardError)(
  "ArrayRecursiveUnionExplicit"
)(ArrayRecursiveUnionExplicit)(
  (p: (input: ArrayRecursiveUnionExplicit) => ArrayRecursiveUnionExplicit) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)