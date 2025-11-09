import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_DynamicTemplate = (): void => _test_json_assertStringify(TypeGuardError)(
    "DynamicTemplate",
)<DynamicTemplate>(
    DynamicTemplate
)((input) => typia.json.assertStringify<DynamicTemplate>(input));
