import TSON from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_is } from "../internal/_test_is";

export const test_is_array_union = _test_is(
    "union array",
    ArrayUnion.generate,
    (input) => TSON.is(input),
    ArrayUnion.SPOILERS,
);
