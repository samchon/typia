import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_assert_stringify_array_recursive = _test_assert_stringify(
    "recursive array",
    ArrayRecursive.generate,
    (input) => TSON.assertStringify(input),
    ArrayRecursive.SPOILERS,
);
