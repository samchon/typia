import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_equals } from "../equals/_test_equals";

export const test_equals_object_recursive = _test_equals(
    "recursive object",
    ObjectRecursive.generate,
    (input) => TSON.equals(input),
);
