import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_json_createIsStringify_ToJsonNull = (): void => _test_json_isStringify(
    "ToJsonNull",
)<ToJsonNull>(
    ToJsonNull
)(typia.json.createIsStringify<ToJsonNull>());
