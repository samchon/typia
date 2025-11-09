import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { InstanceUnion } from "../../structures/InstanceUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_InstanceUnion = (): Promise<void> => _test_functional_assertReturnAsync(CustomGuardError)(
  "InstanceUnion"
)(InstanceUnion)(
  (p: (input: InstanceUnion) => Promise<InstanceUnion>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)