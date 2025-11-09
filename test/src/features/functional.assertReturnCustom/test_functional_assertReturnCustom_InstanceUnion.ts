import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { InstanceUnion } from "../../structures/InstanceUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_InstanceUnion = (): void => _test_functional_assertReturn(CustomGuardError)(
  "InstanceUnion"
)(InstanceUnion)(
  (p: (input: InstanceUnion) => InstanceUnion) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)