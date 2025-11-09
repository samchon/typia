import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ToJsonDouble = (): void => _test_assertGuard(CustomGuardError)(
    "ToJsonDouble",
)<ToJsonDouble>(
    ToJsonDouble
)((input) => typia.assertGuard<ToJsonDouble>(input, (p) => new CustomGuardError(p)));
