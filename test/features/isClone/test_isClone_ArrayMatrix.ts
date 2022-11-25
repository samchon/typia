import TSON from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ArrayMatrix = _test_isClone(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input) => TSON.isClone(input),
    ArrayMatrix.SPOILERS,
);