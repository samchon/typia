import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_json_createIsParse_TypeTagArray = (): void => _test_json_isParse(
    "TypeTagArray",
)<TypeTagArray>(
    TypeTagArray
)(typia.json.createIsParse<TypeTagArray>());
