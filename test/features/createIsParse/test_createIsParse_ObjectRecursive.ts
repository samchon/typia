import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_createIsParse_ObjectRecursive = _test_isParse(
    "ObjectRecursive",
    ObjectRecursive.generate,
    typia.createIsParse<ObjectRecursive>(),
    ObjectRecursive.SPOILERS,
);
