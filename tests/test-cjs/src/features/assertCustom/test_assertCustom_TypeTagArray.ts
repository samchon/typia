import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_assertCustom_TypeTagArray = (): void =>
  _test_assert(CustomGuardError)("TypeTagArray")<TypeTagArray>(TypeTagArray)(
    (input) =>
      typia.assert<TypeTagArray>(input, (p) => new CustomGuardError(p)),
  );
