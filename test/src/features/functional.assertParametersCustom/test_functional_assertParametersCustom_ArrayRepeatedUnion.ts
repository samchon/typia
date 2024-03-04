import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_functional_assertParametersCustom_ArrayRepeatedUnion =
  _test_functional_assertParameters(CustomGuardError)("ArrayRepeatedUnion")(
    ArrayRepeatedUnion,
  )((p: (input: ArrayRepeatedUnion) => ArrayRepeatedUnion) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
