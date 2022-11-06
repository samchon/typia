import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_clone } from "./_test_clone";

export const test_clone_array_recursive = _test_clone(
    "recursive array",
    ArrayRecursive.generate,
    (input) => TSON.clone(input),
);
