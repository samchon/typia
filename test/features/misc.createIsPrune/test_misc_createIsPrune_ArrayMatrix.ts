import typia from "../../../src";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_misc_createIsPrune_ArrayMatrix = _test_misc_isPrune(
    "ArrayMatrix",
)<ArrayMatrix>(
    ArrayMatrix
)(typia.misc.createIsPrune<ArrayMatrix>());
