import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_misc_validateClone_ConstantEnumeration = (): void => _test_misc_validateClone(
    "ConstantEnumeration",
)<ConstantEnumeration>(
    ConstantEnumeration
)((input) => typia.misc.validateClone<ConstantEnumeration>(input));
