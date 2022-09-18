import TSON from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_assert_equals } from "./_test_assert_equals";

export const test_assert_equals_array_simple = _test_assert_equals(
    "simple array",
    ArraySimple.generate,
    (input) => TSON.assertEquals(input),
);
