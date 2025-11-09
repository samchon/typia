import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionCustom_ToJsonAtomicSimple = (): void => _test_functional_assertEqualsFunction(CustomGuardError)(
  "ToJsonAtomicSimple"
)(ToJsonAtomicSimple)(
  (p: (input: ToJsonAtomicSimple) => ToJsonAtomicSimple) => typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)