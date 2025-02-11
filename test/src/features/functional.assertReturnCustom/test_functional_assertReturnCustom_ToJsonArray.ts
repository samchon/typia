import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_assertReturnCustom_ToJsonArray =
  _test_functional_assertReturn(CustomGuardError)("ToJsonArray")(ToJsonArray)(
    (p: (input: ToJsonArray) => ToJsonArray) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
