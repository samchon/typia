import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ToJsonArray } from "../../structures/ToJsonArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionCustom_ToJsonArray =
  _test_functional_assertEqualsFunction(CustomGuardError)("ToJsonArray")(
    ToJsonArray,
  )((p: (input: ToJsonArray) => ToJsonArray) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
