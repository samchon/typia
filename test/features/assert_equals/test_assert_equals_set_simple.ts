import TSON from "../../../src";
import { SetSimple } from "../../structures/SetSimple";
import { _test_assert_equals } from "../internal/_test_assert_equals";

export const test_assert_equals_set_simple = _test_assert_equals(
    "simple set",
    SetSimple.generate,
    (input) => TSON.assertEquals(input),
    false,
);
