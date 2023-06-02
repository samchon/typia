import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_isStringify_ObjectRecursive = _test_isStringify(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) => typia.isStringify(input),
    ObjectRecursive.SPOILERS,
);
