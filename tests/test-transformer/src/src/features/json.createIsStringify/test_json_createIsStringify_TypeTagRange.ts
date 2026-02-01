import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_json_createIsStringify_TypeTagRange = (): void => _test_json_isStringify(
    "TypeTagRange",
)<TypeTagRange>(
    TypeTagRange
)(typia.json.createIsStringify<TypeTagRange>());
