import TSON from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_ArrayMatrix = _test_validateEquals(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input) => TSON.validateEquals(input),
);
