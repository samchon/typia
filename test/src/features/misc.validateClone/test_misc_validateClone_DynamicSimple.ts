import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_misc_validateClone_DynamicSimple = (): void => _test_misc_validateClone(
    "DynamicSimple",
)<DynamicSimple>(
    DynamicSimple
)((input) => typia.misc.validateClone<DynamicSimple>(input));
