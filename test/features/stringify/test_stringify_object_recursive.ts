import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_object_recursive = _test_stringify(
    "recursive object",
    ObjectRecursive.generate,
    (input) => TSON.stringify(input),
);
