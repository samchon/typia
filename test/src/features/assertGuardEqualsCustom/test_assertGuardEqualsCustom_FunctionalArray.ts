import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_assertGuardEqualsCustom_FunctionalArray =
  _test_assertGuardEquals(CustomGuardError)("FunctionalArray")<FunctionalArray>(
    FunctionalArray,
  )((input) =>
    typia.assertGuardEquals<FunctionalArray>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
