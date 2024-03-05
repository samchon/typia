import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_assertEqualsFunctionCustom_ArrayUnion =
  _test_functional_assertEqualsFunction(CustomGuardError)("ArrayUnion")(
    ArrayUnion,
  )((p: (input: ArrayUnion) => ArrayUnion) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
