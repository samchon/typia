import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_assertCustom_ArrayMatrix = _test_assert(CustomGuardError)(
  "ArrayMatrix",
)<ArrayMatrix>(ArrayMatrix)((input) =>
  typia.assert<ArrayMatrix>(input, (p) => new CustomGuardError(p)),
);
