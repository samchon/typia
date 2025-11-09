import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ToJsonTuple = (): void => _test_assert(CustomGuardError)(
    "ToJsonTuple",
)<ToJsonTuple>(
    ToJsonTuple
)(typia.createAssert<ToJsonTuple>((p) => new CustomGuardError(p)));
