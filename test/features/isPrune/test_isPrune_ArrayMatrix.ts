import typia from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_ArrayMatrix = _test_isPrune(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input) => typia.isPrune(input),
    ArrayMatrix.SPOILERS,
);
