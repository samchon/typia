import TSON from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_is } from "../internal/_test_is";

export const test_create_is_array_matrix = _test_is(
    "array matrix",
    ArrayMatrix.generate,
    TSON.createIs<ArrayMatrix>(),
    ArrayMatrix.SPOILERS,
);
