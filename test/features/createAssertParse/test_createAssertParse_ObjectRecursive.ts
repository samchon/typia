import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_ObjectRecursive = _test_assertParse(
    "ObjectRecursive",
    ObjectRecursive.generate,
    TSON.createAssertParse<ObjectRecursive>(),
    ObjectRecursive.SPOILERS,
);
