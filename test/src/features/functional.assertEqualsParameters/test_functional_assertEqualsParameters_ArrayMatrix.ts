import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_assertEqualsParameters_ArrayMatrix = (): void =>
  _test_functional_assertEqualsParameters(TypeGuardError)("ArrayMatrix")(
    ArrayMatrix,
  )((p: (input: ArrayMatrix) => ArrayMatrix) =>
    typia.functional.assertEqualsParameters(p),
  );
