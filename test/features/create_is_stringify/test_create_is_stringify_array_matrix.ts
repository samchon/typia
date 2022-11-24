import TSON from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_create_is_stringify_array_matrix = _test_is_stringify(
    "array matrix",
    ArrayMatrix.generate,
    TSON.createIsStringify<ArrayMatrix>(),
    ArrayMatrix.SPOILERS,
);
