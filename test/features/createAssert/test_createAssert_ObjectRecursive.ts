import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ObjectRecursive = _test_assert(
    "ObjectRecursive",
    ObjectRecursive.generate,
    TSON.createAssert<ObjectRecursive>(),
    ObjectRecursive.SPOILERS,
);