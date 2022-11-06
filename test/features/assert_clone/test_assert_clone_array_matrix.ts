import TSON from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_array_matrix = _test_assert_clone(
    "array matrix",
    ArrayMatrix.generate,
    (input) => TSON.assertClone(input),
    ArrayMatrix.SPOILERS,
);
