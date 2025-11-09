import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_json_isStringify_ArrayAny = (): void => _test_json_isStringify(
    "ArrayAny",
)<ArrayAny>(
    ArrayAny
)((input) => typia.json.isStringify<ArrayAny>(input));
