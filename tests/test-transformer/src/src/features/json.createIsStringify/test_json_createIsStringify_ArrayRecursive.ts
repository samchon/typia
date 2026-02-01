import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_json_createIsStringify_ArrayRecursive = (): void => _test_json_isStringify(
    "ArrayRecursive",
)<ArrayRecursive>(
    ArrayRecursive
)(typia.json.createIsStringify<ArrayRecursive>());
