import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_assertCustom_TypeTagTypeBigInt = (): void =>
  _test_assert(CustomGuardError)("TypeTagTypeBigInt")<TypeTagTypeBigInt>(
    TypeTagTypeBigInt,
  )((input) =>
    typia.assert<TypeTagTypeBigInt>(input, (p) => new CustomGuardError(p)),
  );
