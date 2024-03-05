import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_assertEqualsReturn_ToJsonArray =
  _test_functional_assertEqualsReturn(TypeGuardError)("ToJsonArray")(
    ToJsonArray,
  )((p: (input: ToJsonArray) => ToJsonArray) =>
    typia.functional.assertEqualsReturn(p),
  );
