import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_json_isStringify_ObjectRecursive = _test_json_isStringify(
    "ObjectRecursive",
    ObjectRecursive.generate,
    typia.json.createIsStringify<ObjectRecursive>(),
    ObjectRecursive.SPOILERS,
);
