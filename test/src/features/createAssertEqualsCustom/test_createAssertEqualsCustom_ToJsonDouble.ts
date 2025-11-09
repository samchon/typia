import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_ToJsonDouble = (): void => _test_assertEquals(CustomGuardError)(
    "ToJsonDouble",
)<ToJsonDouble>(
    ToJsonDouble
)(typia.createAssertEquals<ToJsonDouble>((p) => new CustomGuardError(p)));
