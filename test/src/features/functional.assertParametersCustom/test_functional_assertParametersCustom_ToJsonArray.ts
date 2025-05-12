import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_assertParametersCustom_ToJsonArray =
  _test_functional_assertParameters(CustomGuardError)("ToJsonArray")(
    ToJsonArray,
  )((p: (input: ToJsonArray) => ToJsonArray) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
