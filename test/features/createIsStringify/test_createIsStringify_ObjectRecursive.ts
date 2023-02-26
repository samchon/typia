import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_createIsStringify_ObjectRecursive = _test_isStringify(
    "ObjectRecursive",
    ObjectRecursive.generate,
    typia.createIsStringify<ObjectRecursive>(),
    ObjectRecursive.SPOILERS,
);
