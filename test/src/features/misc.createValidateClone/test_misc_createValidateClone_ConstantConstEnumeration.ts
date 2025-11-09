import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_misc_createValidateClone_ConstantConstEnumeration = (): void => _test_misc_validateClone(
    "ConstantConstEnumeration",
)<ConstantConstEnumeration>(
    ConstantConstEnumeration
)(typia.misc.createValidateClone<ConstantConstEnumeration>());
