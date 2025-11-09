import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_ToJsonUnion = (): void => _test_assertEquals(TypeGuardError)(
    "ToJsonUnion",
)<ToJsonUnion>(
    ToJsonUnion
)(typia.createAssertEquals<ToJsonUnion>());
