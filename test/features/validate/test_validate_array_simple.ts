import TSON from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_validate } from "./_test_validate";

export const test_validate_array_simple = _test_validate(
    "simple array",
    ArraySimple.generate,
    (input) => TSON.validate(input),
    ArraySimple.SPOILERS,
);
