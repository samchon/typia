import TSON from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_equals } from "./_test_equals";

export const test_equals_array_simple = _test_equals(
    "simple array",
    ArraySimple.generate,
    (input) => TSON.equals(input),
);
