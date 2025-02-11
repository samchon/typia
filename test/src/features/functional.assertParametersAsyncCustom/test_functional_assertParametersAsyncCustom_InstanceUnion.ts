import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { InstanceUnion } from "../../structures/InstanceUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_InstanceUnion = _test_functional_assertParametersAsync(CustomGuardError)(
  "InstanceUnion"
)(InstanceUnion)(
  (p: (input: InstanceUnion) => Promise<InstanceUnion>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)