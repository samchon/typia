import typia from "../../../src";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_json_createStringify_ObjectRecursive = _test_json_stringify(
    "ObjectRecursive",
)<ObjectRecursive>(
    ObjectRecursive
)(typia.json.createStringify<ObjectRecursive>());
