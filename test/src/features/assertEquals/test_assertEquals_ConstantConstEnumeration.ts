import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

import { TypeGuardError } from "typia";

export const test_assertEquals_ConstantConstEnumeration = _test_assertEquals(TypeGuardError)(
    "ConstantConstEnumeration",
)<ConstantConstEnumeration>(
    ConstantConstEnumeration
)((input) => typia.assertEquals<ConstantConstEnumeration>(input));
