import typia from "../../../src";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_misc_isClone_ArrayMatrix = _test_misc_isClone(
    "ArrayMatrix",
)<ArrayMatrix>(
    ArrayMatrix
)((input) => typia.misc.isClone<ArrayMatrix>(input));
