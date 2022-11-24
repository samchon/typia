import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_is_clone } from "../internal/_test_is_clone";

export const test_create_is_clone_array_recursive = _test_is_clone(
    "recursive array",
    ArrayRecursive.generate,
    TSON.createIsClone<ArrayRecursive>(),
    ArrayRecursive.SPOILERS,
);
