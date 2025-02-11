import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_assertGuardEqualsCustom_TypeTagInfinite =
  _test_assertGuardEquals(CustomGuardError)("TypeTagInfinite")<TypeTagInfinite>(
    TypeTagInfinite,
  )((input) =>
    typia.assertGuardEquals<TypeTagInfinite>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
