import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectSimple } from "../../structures/ObjectSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ObjectSimple = _test_assert(CustomGuardError)(
  "ObjectSimple",
)<ObjectSimple>(ObjectSimple)((input) =>
  typia.assert<ObjectSimple>(input, (p) => new CustomGuardError(p)),
);
