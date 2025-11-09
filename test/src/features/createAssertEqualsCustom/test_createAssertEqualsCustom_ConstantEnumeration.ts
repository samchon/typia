import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_ConstantEnumeration = (): void => _test_assertEquals(CustomGuardError)(
    "ConstantEnumeration",
)<ConstantEnumeration>(
    ConstantEnumeration
)(typia.createAssertEquals<ConstantEnumeration>((p) => new CustomGuardError(p)));
