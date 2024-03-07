import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayAny } from "../../structures/ArrayAny";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ArrayAny = _test_assert(CustomGuardError)(
  "ArrayAny",
)<ArrayAny>(ArrayAny)((input) =>
  typia.assert<ArrayAny>(input, (p) => new CustomGuardError(p)),
);
