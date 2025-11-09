import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicUnion } from "../../structures/DynamicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_DynamicUnion = (): void => _test_json_assertStringify(CustomGuardError)(
    "DynamicUnion",
)<DynamicUnion>(
    DynamicUnion
)(typia.json.createAssertStringify<DynamicUnion>((p) => new CustomGuardError(p)));
