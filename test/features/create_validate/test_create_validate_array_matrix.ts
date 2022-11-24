import TSON from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_validate } from "../internal/_test_validate";

export const test_create_validate_array_matrix = _test_validate(
    "array matrix",
    ArrayMatrix.generate,
    TSON.createValidate<ArrayMatrix>(),
    ArrayMatrix.SPOILERS,
);
