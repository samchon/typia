import TSON from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_array_simple = _test_validate(
    "simple array",
    ArraySimple.generate,
    TSON.createValidate<ArraySimple>(),
    ArraySimple.SPOILERS,
);
