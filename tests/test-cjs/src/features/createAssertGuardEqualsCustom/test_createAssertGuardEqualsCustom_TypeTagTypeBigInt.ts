import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_createAssertGuardEqualsCustom_TypeTagTypeBigInt = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "TypeTagTypeBigInt",
  )<TypeTagTypeBigInt>(TypeTagTypeBigInt)(
    typia.createAssertGuardEquals<TypeTagTypeBigInt>(
      (p) => new CustomGuardError(p),
    ),
  );
