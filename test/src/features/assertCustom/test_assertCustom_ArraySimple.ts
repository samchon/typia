import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_assertCustom_ArraySimple = _test_assert(CustomGuardError)(
  "ArraySimple",
)<ArraySimple>(ArraySimple)((input) =>
  typia.assert<ArraySimple>(input, (p) => new CustomGuardError(p)),
);
