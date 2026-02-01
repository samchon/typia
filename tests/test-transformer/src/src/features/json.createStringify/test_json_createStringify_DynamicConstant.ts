import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_json_createStringify_DynamicConstant = (): void => _test_json_stringify(
    "DynamicConstant",
)<DynamicConstant>(
    DynamicConstant
)(typia.json.createStringify<DynamicConstant>());
