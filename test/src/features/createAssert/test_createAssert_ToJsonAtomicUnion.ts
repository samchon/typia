import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

import { TypeGuardError } from "typia";

export const test_createAssert_ToJsonAtomicUnion = _test_assert(TypeGuardError)(
    "ToJsonAtomicUnion",
)<ToJsonAtomicUnion>(
    ToJsonAtomicUnion
)(typia.createAssert<ToJsonAtomicUnion>());
