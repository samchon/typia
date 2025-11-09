import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_assertGuardEqualsCustom_TypeTagBigInt = (): void =>
  _test_assertGuardEquals(CustomGuardError)("TypeTagBigInt")<TypeTagBigInt>(
    TypeTagBigInt,
  )((input) =>
    typia.assertGuardEquals<TypeTagBigInt>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
