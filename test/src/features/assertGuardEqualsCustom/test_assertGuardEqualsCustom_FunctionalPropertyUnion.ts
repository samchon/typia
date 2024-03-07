import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_FunctionalPropertyUnion =
  _test_assertGuardEquals(CustomGuardError)(
    "FunctionalPropertyUnion",
  )<FunctionalPropertyUnion>(FunctionalPropertyUnion)((input) =>
    typia.assertGuardEquals<FunctionalPropertyUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
