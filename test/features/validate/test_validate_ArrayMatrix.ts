import TSON from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_ArrayMatrix = _test_validate(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input) => TSON.validate(input),
    ArrayMatrix.SPOILERS,
);
