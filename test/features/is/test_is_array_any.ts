import TSON from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_is } from "../internal/_test_is";

export const test_is_array_any = _test_is(
    "any array",
    ArrayAny.generate,
    (input) => TSON.is(input),
    ArrayAny.SPOILERS,
);
