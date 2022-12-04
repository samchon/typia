import TSON from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_ArrayMatrix = _test_assertParse(
    "ArrayMatrix",
    ArrayMatrix.generate,
    TSON.createAssertParse<ArrayMatrix>(),
    ArrayMatrix.SPOILERS,
);
