import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

import { TypeGuardError } from "typia";

export const test_createAssert_ToJsonUnion = (): void => _test_assert(TypeGuardError)(
    "ToJsonUnion",
)<ToJsonUnion>(
    ToJsonUnion
)(typia.createAssert<ToJsonUnion>());
