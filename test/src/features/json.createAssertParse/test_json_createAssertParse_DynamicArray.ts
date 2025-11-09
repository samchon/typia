import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicArray } from "../../structures/DynamicArray";

import { TypeGuardError } from "typia";

export const test_json_createAssertParse_DynamicArray = (): void => _test_json_assertParse(TypeGuardError)(
    "DynamicArray",
)<DynamicArray>(
    DynamicArray
)(typia.json.createAssertParse<DynamicArray>());
