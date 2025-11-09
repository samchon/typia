import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { SetAlias } from "../../structures/SetAlias";

export const test_functional_assertReturnAsync_SetAlias = (): Promise<void> =>
  _test_functional_assertReturnAsync(TypeGuardError)("SetAlias")(SetAlias)(
    (p: (input: SetAlias) => Promise<SetAlias>) =>
      typia.functional.assertReturn(p),
  );
