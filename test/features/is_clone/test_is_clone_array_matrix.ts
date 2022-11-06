import TSON from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_array_matrix = _test_is_clone(
    "array matrix",
    ArrayMatrix.generate,
    (input) => TSON.isClone(input),
    ArrayMatrix.SPOILERS,
);
