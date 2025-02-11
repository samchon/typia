import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_ConstantConstEnumeration = _test_assertEquals(CustomGuardError)(
    "ConstantConstEnumeration",
)<ConstantConstEnumeration>(
    ConstantConstEnumeration
)((input) => typia.assertEquals<ConstantConstEnumeration>(input, (p) => new CustomGuardError(p)));
