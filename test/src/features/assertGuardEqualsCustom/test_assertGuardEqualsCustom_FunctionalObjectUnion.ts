import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_assertGuardEqualsCustom_FunctionalObjectUnion = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "FunctionalObjectUnion",
  )<FunctionalObjectUnion>(FunctionalObjectUnion)((input) =>
    typia.assertGuardEquals<FunctionalObjectUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
