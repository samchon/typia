import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_array_recursive = _test_is_clone(
    "recursive array",
    ArrayRecursive.generate,
    (input) => TSON.isClone(input),
    ArrayRecursive.SPOILERS,
);
