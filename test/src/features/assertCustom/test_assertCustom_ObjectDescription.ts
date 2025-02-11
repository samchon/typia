import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_assertCustom_ObjectDescription = _test_assert(
  CustomGuardError,
)("ObjectDescription")<ObjectDescription>(ObjectDescription)((input) =>
  typia.assert<ObjectDescription>(input, (p) => new CustomGuardError(p)),
);
