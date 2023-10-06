import typia from "../../../src";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_json_createIsStringify_TypeTagRange = _test_json_isStringify(
    "TypeTagRange",
)<TypeTagRange>(
    TypeTagRange
)(typia.json.createIsStringify<TypeTagRange>());
