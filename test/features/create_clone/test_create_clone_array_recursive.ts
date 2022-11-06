import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_clone } from "./../clone/_test_clone";

export const test_create_clone_array_recursive = _test_clone(
    "recursive array",
    ArrayRecursive.generate,
    TSON.createClone<ArrayRecursive>(),
);
