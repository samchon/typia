import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

import { TypeGuardError } from "typia";

export const test_createAssert_ConstantAtomicUnion = _test_assert(TypeGuardError)(
    "ConstantAtomicUnion",
)<ConstantAtomicUnion>(
    ConstantAtomicUnion
)(typia.createAssert<ConstantAtomicUnion>());
