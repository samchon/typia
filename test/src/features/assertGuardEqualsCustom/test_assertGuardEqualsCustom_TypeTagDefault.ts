import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_assertGuardEqualsCustom_TypeTagDefault =
  _test_assertGuardEquals(CustomGuardError)("TypeTagDefault")<TypeTagDefault>(
    TypeTagDefault,
  )((input) =>
    typia.assertGuardEquals<TypeTagDefault>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
