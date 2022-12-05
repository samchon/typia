import TSON from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_ArrayMatrix = _test_assertParse(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input) => TSON.assertParse<ArrayMatrix>(input),
    ArrayMatrix.SPOILERS,
);
