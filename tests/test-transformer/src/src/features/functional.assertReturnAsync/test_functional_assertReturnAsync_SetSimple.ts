import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { SetSimple } from "../../structures/SetSimple";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_SetSimple = (): Promise<void> => _test_functional_assertReturnAsync(TypeGuardError)(
  "SetSimple"
)(SetSimple)(
  (p: (input: SetSimple) => Promise<SetSimple>) =>
    typia.functional.assertReturn(p),
)