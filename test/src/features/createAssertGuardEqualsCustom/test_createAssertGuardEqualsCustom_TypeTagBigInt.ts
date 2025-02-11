import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_createAssertGuardEqualsCustom_TypeTagBigInt =
  _test_assertGuardEquals(CustomGuardError)("TypeTagBigInt")<TypeTagBigInt>(
    TypeTagBigInt,
  )(
    typia.createAssertGuardEquals<TypeTagBigInt>(
      (p) => new CustomGuardError(p),
    ),
  );
