import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_assertCustom_TypeTagCustom = (): void =>
  _test_assert(CustomGuardError)("TypeTagCustom")<TypeTagCustom>(TypeTagCustom)(
    (input) =>
      typia.assert<TypeTagCustom>(input, (p) => new CustomGuardError(p)),
  );
