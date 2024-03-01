import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_assertCustom_ArrayAny = _test_assert(CustomGuardError)(
  "ArrayAny",
)<ArrayAny>(ArrayAny)((input) =>
  typia.assert<ArrayAny>(input, (p) => new CustomGuardError(p)),
);
