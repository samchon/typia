import TSON from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_assert } from "./_test_assert";

export const test_assert_array_matrix = _test_assert(
    "array matrix",
    ArrayMatrix.generate,
    (input) => TSON.assert(input),
);
