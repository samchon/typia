import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_assertEqualsFunction_ToJsonArray =
  _test_functional_assertEqualsFunction(TypeGuardError)("ToJsonArray")(
    ToJsonArray,
  )((p: (input: ToJsonArray) => ToJsonArray) =>
    typia.functional.assertEqualsFunction(p),
  );
