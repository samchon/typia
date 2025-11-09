import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_json_createStringify_DynamicSimple = (): void => _test_json_stringify(
    "DynamicSimple",
)<DynamicSimple>(
    DynamicSimple
)(typia.json.createStringify<DynamicSimple>());
