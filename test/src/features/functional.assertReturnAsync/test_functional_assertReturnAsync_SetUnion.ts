import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { SetUnion } from "../../structures/SetUnion";

export const test_functional_assertReturnAsync_SetUnion = (): Promise<void> =>
  _test_functional_assertReturnAsync(TypeGuardError)("SetUnion")(SetUnion)(
    (p: (input: SetUnion) => Promise<SetUnion>) =>
      typia.functional.assertReturn(p),
  );
