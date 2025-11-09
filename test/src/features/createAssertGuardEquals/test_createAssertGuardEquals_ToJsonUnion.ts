import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_ToJsonUnion = (): void => _test_assertGuardEquals(TypeGuardError)(
    "ToJsonUnion",
)<ToJsonUnion>(
    ToJsonUnion
)(typia.createAssertGuardEquals<ToJsonUnion>());
