import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_json_createIsStringify_TypeTagArray = (): void => _test_json_isStringify(
    "TypeTagArray",
)<TypeTagArray>(
    TypeTagArray
)(typia.json.createIsStringify<TypeTagArray>());
