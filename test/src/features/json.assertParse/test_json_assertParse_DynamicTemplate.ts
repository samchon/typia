import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

import { TypeGuardError } from "typia";

export const test_json_assertParse_DynamicTemplate = (): void => _test_json_assertParse(TypeGuardError)(
    "DynamicTemplate",
)<DynamicTemplate>(
    DynamicTemplate
)((input) => typia.json.assertParse<DynamicTemplate>(input));
