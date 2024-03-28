import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_assert_ToJsonArray = _test_assert(TypeGuardError)(
  "ToJsonArray",
)<ToJsonArray>(ToJsonArray)((input) => typia.assert<ToJsonArray>(input));
