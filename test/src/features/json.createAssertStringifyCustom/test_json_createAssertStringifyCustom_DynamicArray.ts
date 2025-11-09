import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicArray } from "../../structures/DynamicArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_DynamicArray = (): void => _test_json_assertStringify(CustomGuardError)(
    "DynamicArray",
)<DynamicArray>(
    DynamicArray
)(typia.json.createAssertStringify<DynamicArray>((p) => new CustomGuardError(p)));
