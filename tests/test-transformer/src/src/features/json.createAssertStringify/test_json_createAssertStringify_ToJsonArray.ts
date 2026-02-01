import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ToJsonArray } from "../../structures/ToJsonArray";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_ToJsonArray = (): void => _test_json_assertStringify(TypeGuardError)(
    "ToJsonArray",
)<ToJsonArray>(
    ToJsonArray
)(typia.json.createAssertStringify<ToJsonArray>());
