import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_json_createStringify_DynamicTemplate = (): void => _test_json_stringify(
    "DynamicTemplate",
)<DynamicTemplate>(
    DynamicTemplate
)(typia.json.createStringify<DynamicTemplate>());
