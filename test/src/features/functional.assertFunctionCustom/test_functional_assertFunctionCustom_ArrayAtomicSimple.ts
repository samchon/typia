import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_ArrayAtomicSimple = (): void => _test_functional_assertFunction(CustomGuardError)(
  "ArrayAtomicSimple"
)(ArrayAtomicSimple)(
  (p: (input: ArrayAtomicSimple) => ArrayAtomicSimple) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)