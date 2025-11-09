import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_ArrayAtomicAlias = (): void => _test_functional_assertReturn(CustomGuardError)(
  "ArrayAtomicAlias"
)(ArrayAtomicAlias)(
  (p: (input: ArrayAtomicAlias) => ArrayAtomicAlias) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)