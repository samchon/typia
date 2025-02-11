import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ToJsonUnion = _test_assert(CustomGuardError)(
    "ToJsonUnion",
)<ToJsonUnion>(
    ToJsonUnion
)(typia.createAssert<ToJsonUnion>((p) => new CustomGuardError(p)));
