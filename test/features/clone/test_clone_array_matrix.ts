import TSON from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_clone } from "./_test_clone";

export const test_clone_array_matrix = _test_clone(
    "array matrix",
    ArrayMatrix.generate,
    (input) => TSON.clone(input),
);
