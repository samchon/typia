import TSON from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_assert_equals } from "./../assert_equals/_test_assert_equals";

export const test_create_assert_equals_array_simple = _test_assert_equals(
    "simple array",
    ArraySimple.generate,
    TSON.createAssertEquals<ArraySimple>(),
);
