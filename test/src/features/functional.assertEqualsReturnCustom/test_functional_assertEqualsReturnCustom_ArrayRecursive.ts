import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_assertEqualsReturnCustom_ArrayRecursive =
  (): void =>
    _test_functional_assertEqualsReturn(CustomGuardError)("ArrayRecursive")(
      ArrayRecursive,
    )((p: (input: ArrayRecursive) => ArrayRecursive) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
