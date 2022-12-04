import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_ObjectRecursive = _test_isParse(
    "ObjectRecursive",
    ObjectRecursive.generate,
    TSON.createIsParse<ObjectRecursive>(),
    ObjectRecursive.SPOILERS,
);
