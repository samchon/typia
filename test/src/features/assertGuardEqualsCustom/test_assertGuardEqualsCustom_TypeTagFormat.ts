import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_assertGuardEqualsCustom_TypeTagFormat =
  _test_assertGuardEquals(CustomGuardError)("TypeTagFormat")<TypeTagFormat>(
    TypeTagFormat,
  )((input) =>
    typia.assertGuardEquals<TypeTagFormat>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
