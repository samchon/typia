import TSON from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_clone } from "../internal/_test_clone";

export const test_create_clone_array_matrix = _test_clone(
    "array matrix",
    ArrayMatrix.generate,
    TSON.createClone<ArrayMatrix>(),
);
