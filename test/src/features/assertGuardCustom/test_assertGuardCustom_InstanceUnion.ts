import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { InstanceUnion } from "../../structures/InstanceUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_InstanceUnion = _test_assertGuard(CustomGuardError)(
    "InstanceUnion",
)<InstanceUnion>(
    InstanceUnion
)((input) => typia.assertGuard<InstanceUnion>(input, (p) => new CustomGuardError(p)));
