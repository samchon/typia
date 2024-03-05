import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_assertCustom_ObjectUndefined = _test_assert(CustomGuardError)(
  "ObjectUndefined",
)<ObjectUndefined>(ObjectUndefined)((input) =>
  typia.assert<ObjectUndefined>(input, (p) => new CustomGuardError(p)),
);
