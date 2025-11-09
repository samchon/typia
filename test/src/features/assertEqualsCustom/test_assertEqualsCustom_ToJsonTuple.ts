import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_ToJsonTuple = (): void => _test_assertEquals(CustomGuardError)(
    "ToJsonTuple",
)<ToJsonTuple>(
    ToJsonTuple
)((input) => typia.assertEquals<ToJsonTuple>(input, (p) => new CustomGuardError(p)));
