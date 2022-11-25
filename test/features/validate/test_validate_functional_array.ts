import TSON from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_functional_array = _test_validate(
    "functional array",
    FunctionalArray.generate,
    (input) => TSON.validate(input),
    FunctionalArray.SPOILERS,
);
