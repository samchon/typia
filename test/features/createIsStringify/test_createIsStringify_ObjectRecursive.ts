import typia from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ObjectRecursive = _test_isStringify(
    "ObjectRecursive",
    ObjectRecursive.generate,
    typia.createIsStringify<ObjectRecursive>(),
    ObjectRecursive.SPOILERS,
);
