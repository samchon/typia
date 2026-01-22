import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_assertEqualsReturnCustom_ArraySimple = (): void =>
  _test_functional_assertEqualsReturn(CustomGuardError)("ArraySimple")(
    ArraySimple,
  )((p: (input: ArraySimple) => ArraySimple) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
