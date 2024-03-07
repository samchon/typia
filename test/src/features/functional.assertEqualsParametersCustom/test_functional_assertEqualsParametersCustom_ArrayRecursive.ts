import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersCustom_ArrayRecursive =
  _test_functional_assertEqualsParameters(CustomGuardError)("ArrayRecursive")(
    ArrayRecursive,
  )((p: (input: ArrayRecursive) => ArrayRecursive) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
