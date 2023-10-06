import typia from "../../../src";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_json_isStringify_TypeTagRange = _test_json_isStringify(
    "TypeTagRange",
)<TypeTagRange>(
    TypeTagRange
)((input) => typia.json.isStringify<TypeTagRange>(input));
