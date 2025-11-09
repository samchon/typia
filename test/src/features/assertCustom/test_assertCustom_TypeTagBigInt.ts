import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_assertCustom_TypeTagBigInt = (): void =>
  _test_assert(CustomGuardError)("TypeTagBigInt")<TypeTagBigInt>(TypeTagBigInt)(
    (input) =>
      typia.assert<TypeTagBigInt>(input, (p) => new CustomGuardError(p)),
  );
