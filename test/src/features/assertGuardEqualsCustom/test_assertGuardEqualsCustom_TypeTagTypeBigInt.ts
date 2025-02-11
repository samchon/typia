import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_assertGuardEqualsCustom_TypeTagTypeBigInt =
  _test_assertGuardEquals(CustomGuardError)(
    "TypeTagTypeBigInt",
  )<TypeTagTypeBigInt>(TypeTagTypeBigInt)((input) =>
    typia.assertGuardEquals<TypeTagTypeBigInt>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
