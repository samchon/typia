import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_json_isStringify_ArrayRepeatedNullable = (): void => _test_json_isStringify(
    "ArrayRepeatedNullable",
)<ArrayRepeatedNullable>(
    ArrayRepeatedNullable
)((input) => typia.json.isStringify<ArrayRepeatedNullable>(input));
