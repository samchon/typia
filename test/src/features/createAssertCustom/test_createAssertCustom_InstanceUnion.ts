import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { InstanceUnion } from "../../structures/InstanceUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_InstanceUnion = _test_assert(CustomGuardError)(
    "InstanceUnion",
)<InstanceUnion>(
    InstanceUnion
)(typia.createAssert<InstanceUnion>((p) => new CustomGuardError(p)));
