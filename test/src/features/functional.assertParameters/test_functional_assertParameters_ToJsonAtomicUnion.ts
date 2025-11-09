import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_ToJsonAtomicUnion = (): void => _test_functional_assertParameters(TypeGuardError)(
  "ToJsonAtomicUnion"
)(ToJsonAtomicUnion)(
  (p: (input: ToJsonAtomicUnion) => ToJsonAtomicUnion) => typia.functional.assertParameters(p),
)