import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_json_createIsParse_DynamicArray = (): void => _test_json_isParse(
    "DynamicArray",
)<DynamicArray>(
    DynamicArray
)(typia.json.createIsParse<DynamicArray>());
