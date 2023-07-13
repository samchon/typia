import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_misc_isPrune_ArrayMatrix = _test_misc_isPrune(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input) => typia.misc.isPrune(input),
    ArrayMatrix.SPOILERS,
);
