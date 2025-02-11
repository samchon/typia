import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_assertReturnCustom_ArrayMatrix =
  _test_functional_assertReturn(CustomGuardError)("ArrayMatrix")(ArrayMatrix)(
    (p: (input: ArrayMatrix) => ArrayMatrix) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
