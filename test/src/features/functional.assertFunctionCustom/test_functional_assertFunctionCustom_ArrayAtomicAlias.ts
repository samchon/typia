import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_ArrayAtomicAlias = (): void => _test_functional_assertFunction(CustomGuardError)(
  "ArrayAtomicAlias"
)(ArrayAtomicAlias)(
  (p: (input: ArrayAtomicAlias) => ArrayAtomicAlias) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)