import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_ObjectRecursive = _test_equals(
    "ObjectRecursive",
    ObjectRecursive.generate,
    TSON.createEquals<ObjectRecursive>(),
);