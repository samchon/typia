import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_assertCustom_TypeTagNaN = _test_assert(CustomGuardError)(
  "TypeTagNaN",
)<TypeTagNaN>(TypeTagNaN)((input) =>
  typia.assert<TypeTagNaN>(input, (p) => new CustomGuardError(p)),
);
