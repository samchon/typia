import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_assertEqualsReturnCustom_ToJsonArray =
  _test_functional_assertEqualsReturn(CustomGuardError)("ToJsonArray")(
    ToJsonArray,
  )((p: (input: ToJsonArray) => ToJsonArray) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
