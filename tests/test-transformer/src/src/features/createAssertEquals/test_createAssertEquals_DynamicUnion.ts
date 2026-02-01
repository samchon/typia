import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { DynamicUnion } from "../../structures/DynamicUnion";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_DynamicUnion = (): void => _test_assertEquals(TypeGuardError)(
    "DynamicUnion",
)<DynamicUnion>(
    DynamicUnion
)(typia.createAssertEquals<DynamicUnion>());
