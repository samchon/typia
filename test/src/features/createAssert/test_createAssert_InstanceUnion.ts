import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { InstanceUnion } from "../../structures/InstanceUnion";

import { TypeGuardError } from "typia";

export const test_createAssert_InstanceUnion = _test_assert(TypeGuardError)(
    "InstanceUnion",
)<InstanceUnion>(
    InstanceUnion
)(typia.createAssert<InstanceUnion>());
