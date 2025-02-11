import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_assertGuardEqualsCustom_FunctionalValueUnion =
  _test_assertGuardEquals(CustomGuardError)(
    "FunctionalValueUnion",
  )<FunctionalValueUnion>(FunctionalValueUnion)((input) =>
    typia.assertGuardEquals<FunctionalValueUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
