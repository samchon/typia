import TSON from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_validate } from "./_test_validate";

export const test_validate_array_matrix = _test_validate(
    "array matrix",
    ArrayMatrix.generate,
    (input) => TSON.validate(input),
    ArrayMatrix.SPOILERS,
);
