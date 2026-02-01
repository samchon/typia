import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_json_createStringify_ToJsonNull = (): void => _test_json_stringify(
    "ToJsonNull",
)<ToJsonNull>(
    ToJsonNull
)(typia.json.createStringify<ToJsonNull>());
