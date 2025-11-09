import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicSimple } from "../../structures/DynamicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_DynamicSimple = (): void => _test_json_assertStringify(CustomGuardError)(
    "DynamicSimple",
)<DynamicSimple>(
    DynamicSimple
)(typia.json.createAssertStringify<DynamicSimple>((p) => new CustomGuardError(p)));
