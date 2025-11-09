import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_ToJsonAtomicSimple = (): void => _test_functional_assertFunction(CustomGuardError)(
  "ToJsonAtomicSimple"
)(ToJsonAtomicSimple)(
  (p: (input: ToJsonAtomicSimple) => ToJsonAtomicSimple) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)