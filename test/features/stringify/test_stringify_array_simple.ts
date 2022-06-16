import TSON from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_array_simple = _test_stringify(
    "simple array",
    ArraySimple.generate(),
    (input) => TSON.stringify(input),
);
