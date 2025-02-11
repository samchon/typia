import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { InstanceUnion } from "../../structures/InstanceUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_InstanceUnion = _test_assert(CustomGuardError)(
    "InstanceUnion",
)<InstanceUnion>(
    InstanceUnion
)((input) => typia.assert<InstanceUnion>(input, (p) => new CustomGuardError(p)));
