import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_assert_equals } from "../internal/_test_assert_equals";

export const test_assert_equals_array_recursive = _test_assert_equals(
    "recursive array",
    ArrayRecursive.generate,
    (input) => TSON.assertEquals(input),
);
