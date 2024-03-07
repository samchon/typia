import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_ArrayRepeatedRequired =
  _test_functional_assertParameters(CustomGuardError)("ArrayRepeatedRequired")(
    ArrayRepeatedRequired,
  )((p: (input: ArrayRepeatedRequired) => ArrayRepeatedRequired) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
