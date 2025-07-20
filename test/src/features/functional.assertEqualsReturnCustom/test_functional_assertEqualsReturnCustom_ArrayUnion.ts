import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_assertEqualsReturnCustom_ArrayUnion = (): void =>
  _test_functional_assertEqualsReturn(CustomGuardError)("ArrayUnion")(
    ArrayUnion,
  )((p: (input: ArrayUnion) => ArrayUnion) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
