import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_assertCustom_ArrayUnion = _test_assert(CustomGuardError)(
  "ArrayUnion",
)<ArrayUnion>(ArrayUnion)((input) =>
  typia.assert<ArrayUnion>(input, (p) => new CustomGuardError(p)),
);
