import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_assertParameters_ArrayMatrix = (): void =>
  _test_functional_assertParameters(TypeGuardError)("ArrayMatrix")(ArrayMatrix)(
    (p: (input: ArrayMatrix) => ArrayMatrix) =>
      typia.functional.assertParameters(p),
  );
