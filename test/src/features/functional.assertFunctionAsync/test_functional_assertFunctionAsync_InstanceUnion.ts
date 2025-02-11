import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { InstanceUnion } from "../../structures/InstanceUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_InstanceUnion = _test_functional_assertFunctionAsync(TypeGuardError)(
  "InstanceUnion"
)(InstanceUnion)(
  (p: (input: InstanceUnion) => Promise<InstanceUnion>) =>
    typia.functional.assertFunction(p),
)