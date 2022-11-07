import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_array_recursive = _test_assert(
    "recursive array",
    ArrayRecursive.generate,
    TSON.createAssert<ArrayRecursive>(),
    ArrayRecursive.SPOILERS,
);
