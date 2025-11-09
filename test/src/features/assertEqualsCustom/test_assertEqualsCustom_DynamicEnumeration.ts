import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_DynamicEnumeration = (): void => _test_assertEquals(CustomGuardError)(
    "DynamicEnumeration",
)<DynamicEnumeration>(
    DynamicEnumeration
)((input) => typia.assertEquals<DynamicEnumeration>(input, (p) => new CustomGuardError(p)));
