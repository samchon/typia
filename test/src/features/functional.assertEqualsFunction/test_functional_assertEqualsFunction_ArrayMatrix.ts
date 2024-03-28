import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_assertEqualsFunction_ArrayMatrix =
  _test_functional_assertEqualsFunction(TypeGuardError)("ArrayMatrix")(
    ArrayMatrix,
  )((p: (input: ArrayMatrix) => ArrayMatrix) =>
    typia.functional.assertEqualsFunction(p),
  );
