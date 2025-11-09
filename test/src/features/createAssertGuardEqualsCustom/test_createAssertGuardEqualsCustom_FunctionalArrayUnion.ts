import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_createAssertGuardEqualsCustom_FunctionalArrayUnion =
  (): void =>
    _test_assertGuardEquals(CustomGuardError)(
      "FunctionalArrayUnion",
    )<FunctionalArrayUnion>(FunctionalArrayUnion)(
      typia.createAssertGuardEquals<FunctionalArrayUnion>(
        (p) => new CustomGuardError(p),
      ),
    );
