import TSON from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_array_union = _test_stringify(
    "union array",
    ArrayUnion.generate,
    (input) => TSON.stringify(input),
);
