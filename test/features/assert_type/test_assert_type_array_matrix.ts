import TSON from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_assert_type } from "./_test_assert_type";

export const test_assert_type_array_matrix = _test_assert_type(
    "array matrix",
    ArrayMatrix.generate,
    (input) => TSON.assertType(input),
    ArrayMatrix.SPOILERS,
);
