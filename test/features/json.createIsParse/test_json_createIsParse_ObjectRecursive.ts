import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_json_isParse_ObjectRecursive = _test_json_isParse(
    "ObjectRecursive",
    ObjectRecursive.generate,
    typia.json.createIsParse<ObjectRecursive>(),
    ObjectRecursive.SPOILERS,
);
