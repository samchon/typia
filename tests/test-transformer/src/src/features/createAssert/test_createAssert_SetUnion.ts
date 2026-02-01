import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { SetUnion } from "../../structures/SetUnion";

import { TypeGuardError } from "typia";

export const test_createAssert_SetUnion = (): void => _test_assert(TypeGuardError)(
    "SetUnion",
)<SetUnion>(
    SetUnion
)(typia.createAssert<SetUnion>());
