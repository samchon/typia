import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_misc_createClone_ArrayAtomicSimple = (): void => _test_misc_clone(
    "ArrayAtomicSimple",
)<ArrayAtomicSimple>(
    ArrayAtomicSimple
)(typia.misc.createClone<ArrayAtomicSimple>());
