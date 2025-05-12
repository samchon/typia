import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_assertReturn_ArrayMatrix =
  _test_functional_assertReturn(TypeGuardError)("ArrayMatrix")(ArrayMatrix)(
    (p: (input: ArrayMatrix) => ArrayMatrix) =>
      typia.functional.assertReturn(p),
  );
