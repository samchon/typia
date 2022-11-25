import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_ObjectRecursive = _test_stringify(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) => TSON.stringify(input),
);
