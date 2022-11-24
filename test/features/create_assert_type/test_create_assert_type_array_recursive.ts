import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_create_assert_type_array_recursive = _test_assert_type(
    "recursive array",
    ArrayRecursive.generate,
    TSON.createAssertType<ArrayRecursive>(),
    ArrayRecursive.SPOILERS,
);
