import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_assertReturnCustom_ArrayRecursive =
  _test_functional_assertReturn(CustomGuardError)("ArrayRecursive")(
    ArrayRecursive,
  )((p: (input: ArrayRecursive) => ArrayRecursive) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
