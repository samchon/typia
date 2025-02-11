import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_createValidateEquals_ConstantConstEnumeration = _test_validateEquals(
    "ConstantConstEnumeration",
)<ConstantConstEnumeration>(
    ConstantConstEnumeration
)(typia.createValidateEquals<ConstantConstEnumeration>());
