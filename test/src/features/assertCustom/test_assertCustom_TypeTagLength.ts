import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_assertCustom_TypeTagLength = _test_assert(CustomGuardError)(
  "TypeTagLength",
)<TypeTagLength>(TypeTagLength)((input) =>
  typia.assert<TypeTagLength>(input, (p) => new CustomGuardError(p)),
);
