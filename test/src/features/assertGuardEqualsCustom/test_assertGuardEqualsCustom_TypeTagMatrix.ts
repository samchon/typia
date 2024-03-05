import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_assertGuardEqualsCustom_TypeTagMatrix =
  _test_assertGuardEquals(CustomGuardError)("TypeTagMatrix")<TypeTagMatrix>(
    TypeTagMatrix,
  )((input) =>
    typia.assertGuardEquals<TypeTagMatrix>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
