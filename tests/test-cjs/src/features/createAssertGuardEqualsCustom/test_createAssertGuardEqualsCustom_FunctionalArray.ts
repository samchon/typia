import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_createAssertGuardEqualsCustom_FunctionalArray = (): void =>
  _test_assertGuardEquals(CustomGuardError)("FunctionalArray")<FunctionalArray>(
    FunctionalArray,
  )(
    typia.createAssertGuardEquals<FunctionalArray>(
      (p) => new CustomGuardError(p),
    ),
  );
