import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_misc_createClone_DynamicSimple = (): void => _test_misc_clone(
    "DynamicSimple",
)<DynamicSimple>(
    DynamicSimple
)(typia.misc.createClone<DynamicSimple>());
