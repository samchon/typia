import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_json_createIsStringify_DynamicTemplate = (): void => _test_json_isStringify(
    "DynamicTemplate",
)<DynamicTemplate>(
    DynamicTemplate
)(typia.json.createIsStringify<DynamicTemplate>());
