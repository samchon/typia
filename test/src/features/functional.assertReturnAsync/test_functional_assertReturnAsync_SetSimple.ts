import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { SetSimple } from "../../structures/SetSimple";

export const test_functional_assertReturnAsync_SetSimple = (): Promise<void> =>
  _test_functional_assertReturnAsync(TypeGuardError)("SetSimple")(SetSimple)(
    (p: (input: SetSimple) => Promise<SetSimple>) =>
      typia.functional.assertReturn(p),
  );
