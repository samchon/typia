import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_misc_clone_ConstantEnumeration = (): void => _test_misc_clone(
    "ConstantEnumeration",
)<ConstantEnumeration>(
    ConstantEnumeration
)((input) => typia.misc.clone<ConstantEnumeration>(input));
