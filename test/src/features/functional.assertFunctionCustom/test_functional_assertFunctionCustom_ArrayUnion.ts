import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ArrayUnion } from "../../structures/ArrayUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_ArrayUnion =
  _test_functional_assertFunction(CustomGuardError)("ArrayUnion")(ArrayUnion)(
    (p: (input: ArrayUnion) => ArrayUnion) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
