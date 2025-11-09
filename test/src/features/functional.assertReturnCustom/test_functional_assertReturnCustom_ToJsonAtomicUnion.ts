import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_ToJsonAtomicUnion = (): void => _test_functional_assertReturn(CustomGuardError)(
  "ToJsonAtomicUnion"
)(ToJsonAtomicUnion)(
  (p: (input: ToJsonAtomicUnion) => ToJsonAtomicUnion) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)