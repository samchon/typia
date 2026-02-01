import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_json_createIsStringify_ArrayAny = (): void => _test_json_isStringify(
    "ArrayAny",
)<ArrayAny>(
    ArrayAny
)(typia.json.createIsStringify<ArrayAny>());
