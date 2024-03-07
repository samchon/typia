import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_ArrayRepeatedUnion =
  _test_functional_assertFunction(CustomGuardError)("ArrayRepeatedUnion")(
    ArrayRepeatedUnion,
  )((p: (input: ArrayRepeatedUnion) => ArrayRepeatedUnion) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
