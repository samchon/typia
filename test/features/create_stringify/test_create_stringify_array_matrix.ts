import TSON from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_array_matrix = _test_stringify(
    "array matrix",
    ArrayMatrix.generate(),
    TSON.createStringify<ArrayMatrix>(),
);
