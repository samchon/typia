import TSON from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_create_assert_stringify_array_matrix = _test_assert_stringify(
    "array matrix",
    ArrayMatrix.generate,
    TSON.createAssertStringify<ArrayMatrix>(),
    ArrayMatrix.SPOILERS,
);
