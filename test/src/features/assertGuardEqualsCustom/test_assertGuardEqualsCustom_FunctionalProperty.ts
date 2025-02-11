import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_assertGuardEqualsCustom_FunctionalProperty =
  _test_assertGuardEquals(CustomGuardError)(
    "FunctionalProperty",
  )<FunctionalProperty>(FunctionalProperty)((input) =>
    typia.assertGuardEquals<FunctionalProperty>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
