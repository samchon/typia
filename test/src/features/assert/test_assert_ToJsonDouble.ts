import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_assert_ToJsonDouble = _test_assert(TypeGuardError)(
  "ToJsonDouble",
)<ToJsonDouble>(ToJsonDouble)((input) => typia.assert<ToJsonDouble>(input));
