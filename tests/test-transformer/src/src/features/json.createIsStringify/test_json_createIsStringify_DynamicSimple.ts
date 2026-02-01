import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_json_createIsStringify_DynamicSimple = (): void => _test_json_isStringify(
    "DynamicSimple",
)<DynamicSimple>(
    DynamicSimple
)(typia.json.createIsStringify<DynamicSimple>());
