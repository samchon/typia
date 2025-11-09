import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_json_isStringify_TypeTagRange = (): void => _test_json_isStringify(
    "TypeTagRange",
)<TypeTagRange>(
    TypeTagRange
)((input) => typia.json.isStringify<TypeTagRange>(input));
