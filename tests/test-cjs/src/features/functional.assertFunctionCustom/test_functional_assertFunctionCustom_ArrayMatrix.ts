import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_assertFunctionCustom_ArrayMatrix = (): void =>
  _test_functional_assertFunction(CustomGuardError)("ArrayMatrix")(ArrayMatrix)(
    (p: (input: ArrayMatrix) => ArrayMatrix) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
