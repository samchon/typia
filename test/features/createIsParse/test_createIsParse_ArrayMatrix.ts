import TSON from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_ArrayMatrix = _test_isParse(
    "ArrayMatrix",
    ArrayMatrix.generate,
    TSON.createIsParse<ArrayMatrix>(),
    ArrayMatrix.SPOILERS,
);
