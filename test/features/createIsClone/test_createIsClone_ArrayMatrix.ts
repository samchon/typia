import TSON from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ArrayMatrix = _test_isClone(
    "ArrayMatrix",
    ArrayMatrix.generate,
    TSON.createIsClone<ArrayMatrix>(),
    ArrayMatrix.SPOILERS,
);
