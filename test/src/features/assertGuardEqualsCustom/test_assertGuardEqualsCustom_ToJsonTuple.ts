import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_ToJsonTuple = _test_assertGuardEquals(CustomGuardError)(
    "ToJsonTuple",
)<ToJsonTuple>(
    ToJsonTuple
)((input) => typia.assertGuardEquals<ToJsonTuple>(input, (p) => new CustomGuardError(p)));
