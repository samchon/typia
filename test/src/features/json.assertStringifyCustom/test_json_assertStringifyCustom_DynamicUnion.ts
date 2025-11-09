import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicUnion } from "../../structures/DynamicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_DynamicUnion = (): void => _test_json_assertStringify(CustomGuardError)(
    "DynamicUnion",
)<DynamicUnion>(
    DynamicUnion
)((input) => typia.json.assertStringify<DynamicUnion>(input, (p) => new CustomGuardError(p)));
