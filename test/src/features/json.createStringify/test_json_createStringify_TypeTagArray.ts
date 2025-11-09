import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_json_createStringify_TypeTagArray = (): void => _test_json_stringify(
    "TypeTagArray",
)<TypeTagArray>(
    TypeTagArray
)(typia.json.createStringify<TypeTagArray>());
