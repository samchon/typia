import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_ToJsonTuple = (): void => _test_assertEquals(CustomGuardError)(
    "ToJsonTuple",
)<ToJsonTuple>(
    ToJsonTuple
)(typia.createAssertEquals<ToJsonTuple>((p) => new CustomGuardError(p)));
