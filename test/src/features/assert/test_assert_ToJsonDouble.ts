import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

import { TypeGuardError } from "typia";

export const test_assert_ToJsonDouble = _test_assert(TypeGuardError)(
    "ToJsonDouble",
)<ToJsonDouble>(
    ToJsonDouble
)((input) => typia.assert<ToJsonDouble>(input));
