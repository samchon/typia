import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_ToJsonAtomicUnion = (): void => _test_json_assertStringify(CustomGuardError)(
    "ToJsonAtomicUnion",
)<ToJsonAtomicUnion>(
    ToJsonAtomicUnion
)(typia.json.createAssertStringify<ToJsonAtomicUnion>((p) => new CustomGuardError(p)));
