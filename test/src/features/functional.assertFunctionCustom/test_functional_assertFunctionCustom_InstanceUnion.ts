import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { InstanceUnion } from "../../structures/InstanceUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_InstanceUnion = (): void => _test_functional_assertFunction(CustomGuardError)(
  "InstanceUnion"
)(InstanceUnion)(
  (p: (input: InstanceUnion) => InstanceUnion) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)