import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { SetUnion } from "../../structures/SetUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_SetUnion = _test_functional_assertReturnAsync(TypeGuardError)(
  "SetUnion"
)(SetUnion)(
  (p: (input: SetUnion) => Promise<SetUnion>) =>
    typia.functional.assertReturn(p),
)