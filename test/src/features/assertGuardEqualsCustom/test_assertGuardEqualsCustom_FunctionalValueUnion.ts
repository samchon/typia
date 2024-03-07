import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_FunctionalValueUnion =
  _test_assertGuardEquals(CustomGuardError)(
    "FunctionalValueUnion",
  )<FunctionalValueUnion>(FunctionalValueUnion)((input) =>
    typia.assertGuardEquals<FunctionalValueUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
