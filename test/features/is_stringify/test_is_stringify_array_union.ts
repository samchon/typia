import TSON from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_is_stringify_array_union = _test_is_stringify(
    "union array",
    ArrayUnion.generate,
    (input) => TSON.isStringify(input),
    ArrayUnion.SPOILERS,
);
