import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_ConstantEnumeration = (): void => _test_assertEquals(CustomGuardError)(
    "ConstantEnumeration",
)<ConstantEnumeration>(
    ConstantEnumeration
)((input) => typia.assertEquals<ConstantEnumeration>(input, (p) => new CustomGuardError(p)));
