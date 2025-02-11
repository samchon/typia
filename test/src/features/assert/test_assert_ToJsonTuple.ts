import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_assert_ToJsonTuple = _test_assert(TypeGuardError)(
  "ToJsonTuple",
)<ToJsonTuple>(ToJsonTuple)((input) => typia.assert<ToJsonTuple>(input));
