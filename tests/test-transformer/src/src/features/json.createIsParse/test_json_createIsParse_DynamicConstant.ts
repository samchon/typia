import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_json_createIsParse_DynamicConstant = (): void => _test_json_isParse(
    "DynamicConstant",
)<DynamicConstant>(
    DynamicConstant
)(typia.json.createIsParse<DynamicConstant>());
