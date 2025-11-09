import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_json_createStringify_ToJsonArray = (): void => _test_json_stringify(
    "ToJsonArray",
)<ToJsonArray>(
    ToJsonArray
)(typia.json.createStringify<ToJsonArray>());
