import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_assertCustom_TypeTagRange = _test_assert(CustomGuardError)(
  "TypeTagRange",
)<TypeTagRange>(TypeTagRange)((input) =>
  typia.assert<TypeTagRange>(input, (p) => new CustomGuardError(p)),
);
