import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_createAssertGuardEqualsCustom_FunctionalValueUnion =
  (): void =>
    _test_assertGuardEquals(CustomGuardError)(
      "FunctionalValueUnion",
    )<FunctionalValueUnion>(FunctionalValueUnion)(
      typia.createAssertGuardEquals<FunctionalValueUnion>(
        (p) => new CustomGuardError(p),
      ),
    );
