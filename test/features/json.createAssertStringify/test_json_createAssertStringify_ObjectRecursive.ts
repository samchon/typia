import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_json_assertStringify_ObjectRecursive =
    _test_json_assertStringify("ObjectRecursive")<ObjectRecursive>(
        ObjectRecursive,
    )(typia.json.createAssertStringify<ObjectRecursive>());
