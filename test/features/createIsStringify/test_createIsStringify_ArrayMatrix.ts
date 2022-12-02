import TSON from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ArrayMatrix = _test_isStringify(
    "ArrayMatrix",
    ArrayMatrix.generate,
    TSON.createIsStringify<ArrayMatrix>(),
    ArrayMatrix.SPOILERS,
);
