import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_DynamicUndefined = (): void => _test_json_assertStringify(TypeGuardError)(
    "DynamicUndefined",
)<DynamicUndefined>(
    DynamicUndefined
)((input) => typia.json.assertStringify<DynamicUndefined>(input));
