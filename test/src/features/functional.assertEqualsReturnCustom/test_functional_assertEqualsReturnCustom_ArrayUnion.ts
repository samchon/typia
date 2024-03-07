import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ArrayUnion } from "../../structures/ArrayUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_ArrayUnion =
  _test_functional_assertEqualsReturn(CustomGuardError)("ArrayUnion")(
    ArrayUnion,
  )((p: (input: ArrayUnion) => ArrayUnion) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
