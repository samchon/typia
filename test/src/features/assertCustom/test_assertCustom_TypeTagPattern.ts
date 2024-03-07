import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_TypeTagPattern = _test_assert(CustomGuardError)(
  "TypeTagPattern",
)<TypeTagPattern>(TypeTagPattern)((input) =>
  typia.assert<TypeTagPattern>(input, (p) => new CustomGuardError(p)),
);
