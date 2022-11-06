import TSON from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_is_clone } from "./../is_clone/_test_is_clone";

export const test_create_is_clone_array_matrix = _test_is_clone(
    "array matrix",
    ArrayMatrix.generate,
    TSON.createIsClone<ArrayMatrix>(),
    ArrayMatrix.SPOILERS,
);
