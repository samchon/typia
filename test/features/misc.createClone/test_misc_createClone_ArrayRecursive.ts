import typia from "../../../src";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_misc_createClone_ArrayRecursive = _test_misc_clone(
    "ArrayRecursive",
)<ArrayRecursive>(
    ArrayRecursive
)(typia.misc.createClone<ArrayRecursive>());
