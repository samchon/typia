import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_json_assertParse_ObjectRecursive = _test_json_assertParse(
    "ObjectRecursive",
)<ObjectRecursive>(ObjectRecursive)((input) =>
    typia.json.assertParse<ObjectRecursive>(input),
);
