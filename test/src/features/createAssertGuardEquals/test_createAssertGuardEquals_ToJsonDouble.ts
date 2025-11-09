import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_ToJsonDouble = (): void => _test_assertGuardEquals(TypeGuardError)(
    "ToJsonDouble",
)<ToJsonDouble>(
    ToJsonDouble
)(typia.createAssertGuardEquals<ToJsonDouble>());
