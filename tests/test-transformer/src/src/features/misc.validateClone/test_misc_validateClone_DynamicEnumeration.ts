import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_misc_validateClone_DynamicEnumeration = (): void => _test_misc_validateClone(
    "DynamicEnumeration",
)<DynamicEnumeration>(
    DynamicEnumeration
)((input) => typia.misc.validateClone<DynamicEnumeration>(input));
