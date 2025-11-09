import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_DynamicEnumeration = (): void => _test_assertEquals(CustomGuardError)(
    "DynamicEnumeration",
)<DynamicEnumeration>(
    DynamicEnumeration
)(typia.createAssertEquals<DynamicEnumeration>((p) => new CustomGuardError(p)));
