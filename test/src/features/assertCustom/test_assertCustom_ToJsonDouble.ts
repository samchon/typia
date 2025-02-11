import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ToJsonDouble = _test_assert(CustomGuardError)(
    "ToJsonDouble",
)<ToJsonDouble>(
    ToJsonDouble
)((input) => typia.assert<ToJsonDouble>(input, (p) => new CustomGuardError(p)));
