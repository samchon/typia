import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_assertReturnAsync_FunctionalTuple =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("FunctionalTuple")(
      FunctionalTuple,
    )((p: (input: FunctionalTuple) => Promise<FunctionalTuple>) =>
      typia.functional.assertReturn(p),
    );
