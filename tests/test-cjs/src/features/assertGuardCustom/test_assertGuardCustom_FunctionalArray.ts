import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_assertGuardCustom_FunctionalArray = (): void =>
  _test_assertGuard(CustomGuardError)("FunctionalArray")<FunctionalArray>(
    FunctionalArray,
  )((input) =>
    typia.assertGuard<FunctionalArray>(input, (p) => new CustomGuardError(p)),
  );
