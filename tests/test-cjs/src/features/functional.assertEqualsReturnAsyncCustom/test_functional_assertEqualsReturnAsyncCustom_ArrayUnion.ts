import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_assertEqualsReturnAsyncCustom_ArrayUnion =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(CustomGuardError)("ArrayUnion")(
      ArrayUnion,
    )((p: (input: ArrayUnion) => Promise<ArrayUnion>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
