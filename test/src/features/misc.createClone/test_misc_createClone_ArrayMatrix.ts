import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_misc_createClone_ArrayMatrix = (): void => _test_misc_clone(
    "ArrayMatrix",
)<ArrayMatrix>(
    ArrayMatrix
)(typia.misc.createClone<ArrayMatrix>());
