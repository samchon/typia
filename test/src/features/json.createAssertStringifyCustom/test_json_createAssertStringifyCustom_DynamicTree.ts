import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicTree } from "../../structures/DynamicTree";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_DynamicTree = (): void => _test_json_assertStringify(CustomGuardError)(
    "DynamicTree",
)<DynamicTree>(
    DynamicTree
)(typia.json.createAssertStringify<DynamicTree>((p) => new CustomGuardError(p)));
