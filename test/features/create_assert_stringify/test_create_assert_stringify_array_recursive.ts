import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_assert_stringify } from "./../assert_stringify/_test_assert_stringify";

export const test_create_assert_stringify_array_recursive =
    _test_assert_stringify(
        "recursive array",
        ArrayRecursive.generate,
        TSON.createAssertStringify<ArrayRecursive>(),
        ArrayRecursive.SPOILERS,
    );
