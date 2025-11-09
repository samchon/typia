import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_ToJsonDouble = (): void => _test_assertEquals(CustomGuardError)(
    "ToJsonDouble",
)<ToJsonDouble>(
    ToJsonDouble
)((input) => typia.assertEquals<ToJsonDouble>(input, (p) => new CustomGuardError(p)));
