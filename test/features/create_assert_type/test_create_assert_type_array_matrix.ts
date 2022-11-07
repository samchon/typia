import TSON from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_assert_type } from "./../assert_type/_test_assert_type";

export const test_create_assert_type_array_matrix = _test_assert_type(
    "array matrix",
    ArrayMatrix.generate,
    TSON.createAssertType<ArrayMatrix>(),
    ArrayMatrix.SPOILERS,
);
