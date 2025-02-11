import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_assertCustom_ObjectDate = _test_assert(CustomGuardError)(
  "ObjectDate",
)<ObjectDate>(ObjectDate)((input) =>
  typia.assert<ObjectDate>(input, (p) => new CustomGuardError(p)),
);
