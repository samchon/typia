import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_ToJsonUnion = (): void => _test_json_assertStringify(CustomGuardError)(
    "ToJsonUnion",
)<ToJsonUnion>(
    ToJsonUnion
)(typia.json.createAssertStringify<ToJsonUnion>((p) => new CustomGuardError(p)));
