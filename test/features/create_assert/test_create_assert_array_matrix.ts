import TSON from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_assert } from "../internal/_test_assert";

export const test_create_assert_array_matrix = _test_assert(
    "array matrix",
    ArrayMatrix.generate,
    TSON.createAssert<ArrayMatrix>(),
    ArrayMatrix.SPOILERS,
);
