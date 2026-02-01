import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_json_createIsParse_DynamicSimple = (): void => _test_json_isParse(
    "DynamicSimple",
)<DynamicSimple>(
    DynamicSimple
)(typia.json.createIsParse<DynamicSimple>());
