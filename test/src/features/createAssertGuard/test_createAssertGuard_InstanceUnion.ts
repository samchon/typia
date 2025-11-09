import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { InstanceUnion } from "../../structures/InstanceUnion";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_InstanceUnion = (): void => _test_assertGuard(TypeGuardError)(
    "InstanceUnion",
)<InstanceUnion>(
    InstanceUnion
)(typia.createAssertGuard<InstanceUnion>());
