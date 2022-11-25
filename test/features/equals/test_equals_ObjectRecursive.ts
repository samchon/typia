import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_ObjectRecursive = _test_equals(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) => TSON.equals(input),
);