import TSON from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_assert_stringify } from "./_test_assert_stringify";

export const test_assert_stringify_array_matrix = _test_assert_stringify(
    "array matrix",
    ArrayMatrix.generate,
    (input) => TSON.assertStringify(input),
    ArrayMatrix.SPOILERS,
);
