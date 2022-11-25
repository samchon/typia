import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_assert_stringify_object_recursive = _test_assert_stringify(
    "recursive object",
    ObjectRecursive.generate,
    (input) => TSON.assertStringify(input),
    ObjectRecursive.SPOILERS,
);
