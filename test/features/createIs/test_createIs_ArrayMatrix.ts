import TSON from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ArrayMatrix = _test_is(
    "ArrayMatrix",
    ArrayMatrix.generate,
    TSON.createIs<ArrayMatrix>(),
    ArrayMatrix.SPOILERS,
);