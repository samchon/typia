import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_assertGuardEqualsCustom_TypeTagArray = (): void =>
  _test_assertGuardEquals(CustomGuardError)("TypeTagArray")<TypeTagArray>(
    TypeTagArray,
  )((input) =>
    typia.assertGuardEquals<TypeTagArray>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
