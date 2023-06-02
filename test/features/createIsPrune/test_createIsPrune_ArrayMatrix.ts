import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_createIsPrune_ArrayMatrix = _test_isPrune(
    "ArrayMatrix",
    ArrayMatrix.generate,
    typia.createIsPrune<ArrayMatrix>(),
    ArrayMatrix.SPOILERS,
);
