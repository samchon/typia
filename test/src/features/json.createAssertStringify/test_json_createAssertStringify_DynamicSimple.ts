import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicSimple } from "../../structures/DynamicSimple";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_DynamicSimple = (): void => _test_json_assertStringify(TypeGuardError)(
    "DynamicSimple",
)<DynamicSimple>(
    DynamicSimple
)(typia.json.createAssertStringify<DynamicSimple>());
