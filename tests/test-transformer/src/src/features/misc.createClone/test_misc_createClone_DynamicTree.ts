import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_misc_createClone_DynamicTree = (): void => _test_misc_clone(
    "DynamicTree",
)<DynamicTree>(
    DynamicTree
)(typia.misc.createClone<DynamicTree>());
