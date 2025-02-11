import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_assertGuardEqualsCustom_TypeTagLength =
  _test_assertGuardEquals(CustomGuardError)("TypeTagLength")<TypeTagLength>(
    TypeTagLength,
  )((input) =>
    typia.assertGuardEquals<TypeTagLength>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
