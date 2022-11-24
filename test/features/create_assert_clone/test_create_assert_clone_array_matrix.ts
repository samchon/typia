import TSON from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_assert_clone } from "../internal/_test_assert_clone";

export const test_create_assert_clone_array_matrix = _test_assert_clone(
    "array matrix",
    ArrayMatrix.generate,
    TSON.createAssertClone<ArrayMatrix>(),
    ArrayMatrix.SPOILERS,
);
