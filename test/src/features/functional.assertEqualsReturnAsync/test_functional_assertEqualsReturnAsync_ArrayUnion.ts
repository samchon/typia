import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_assertEqualsReturnAsync_ArrayUnion =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)("ArrayUnion")(
      ArrayUnion,
    )((p: (input: ArrayUnion) => Promise<ArrayUnion>) =>
      typia.functional.assertEqualsReturn(p),
    );
