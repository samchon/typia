import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_assertEqualsCustom_FunctionalArray = (): void =>
  _test_assertEquals(CustomGuardError)("FunctionalArray")<FunctionalArray>(
    FunctionalArray,
  )((input) =>
    typia.assertEquals<FunctionalArray>(input, (p) => new CustomGuardError(p)),
  );
