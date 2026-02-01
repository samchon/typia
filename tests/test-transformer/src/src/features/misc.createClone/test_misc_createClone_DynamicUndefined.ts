import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_misc_createClone_DynamicUndefined = (): void => _test_misc_clone(
    "DynamicUndefined",
)<DynamicUndefined>(
    DynamicUndefined
)(typia.misc.createClone<DynamicUndefined>());
