import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_assertFunctionCustom_ToJsonArray =
  _test_functional_assertFunction(CustomGuardError)("ToJsonArray")(ToJsonArray)(
    (p: (input: ToJsonArray) => ToJsonArray) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
