import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_assert_equals } from "../internal/_test_assert_equals";

export const test_assert_equals_object_simple = _test_assert_equals(
    "simple object",
    ObjectSimple.generate,
    (input) => TSON.assertEquals(input),
);
