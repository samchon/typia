import TSON from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_is } from "../internal/_test_is";

export const test_is_ArraySimple = _test_is(
    "ArraySimple",
    ArraySimple.generate,
    (input) => TSON.is(input),
    ArraySimple.SPOILERS,
);