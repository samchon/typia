import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_json_createIsStringify_ArrayRepeatedRequired = (): void => _test_json_isStringify(
    "ArrayRepeatedRequired",
)<ArrayRepeatedRequired>(
    ArrayRepeatedRequired
)(typia.json.createIsStringify<ArrayRepeatedRequired>());
