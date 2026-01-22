import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_assertFunction_ArrayMatrix = (): void =>
  _test_functional_assertFunction(TypeGuardError)("ArrayMatrix")(ArrayMatrix)(
    (p: (input: ArrayMatrix) => ArrayMatrix) =>
      typia.functional.assertFunction(p),
  );
