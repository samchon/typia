import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicArray } from "../../structures/DynamicArray";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_DynamicArray = (): void => _test_json_assertStringify(TypeGuardError)(
    "DynamicArray",
)<DynamicArray>(
    DynamicArray
)(typia.json.createAssertStringify<DynamicArray>());
