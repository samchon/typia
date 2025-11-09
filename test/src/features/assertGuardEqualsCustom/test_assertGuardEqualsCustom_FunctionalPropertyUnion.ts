import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_assertGuardEqualsCustom_FunctionalPropertyUnion = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "FunctionalPropertyUnion",
  )<FunctionalPropertyUnion>(FunctionalPropertyUnion)((input) =>
    typia.assertGuardEquals<FunctionalPropertyUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
