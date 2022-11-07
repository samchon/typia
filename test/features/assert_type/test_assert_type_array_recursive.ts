import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_assert_type } from "./_test_assert_type";

export const test_assert_type_array_recursive = _test_assert_type(
    "recursive array",
    ArrayRecursive.generate,
    (input) => TSON.assertType(input),
    ArrayRecursive.SPOILERS,
);
