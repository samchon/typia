import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicArray } from "../../structures/DynamicArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_DynamicArray = (): void => _test_json_assertStringify(CustomGuardError)(
    "DynamicArray",
)<DynamicArray>(
    DynamicArray
)((input) => typia.json.assertStringify<DynamicArray>(input, (p) => new CustomGuardError(p)));
