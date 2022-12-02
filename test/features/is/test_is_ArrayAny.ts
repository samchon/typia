import TSON from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_is } from "../internal/_test_is";

export const test_is_ArrayAny = _test_is(
    "ArrayAny",
    ArrayAny.generate,
    (input) => TSON.is(input),
    ArrayAny.SPOILERS,
);
