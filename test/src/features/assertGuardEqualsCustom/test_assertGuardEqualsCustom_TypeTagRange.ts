import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_assertGuardEqualsCustom_TypeTagRange =
  _test_assertGuardEquals(CustomGuardError)("TypeTagRange")<TypeTagRange>(
    TypeTagRange,
  )((input) =>
    typia.assertGuardEquals<TypeTagRange>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
