import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_json_stringify_ToJsonNull = (): void => _test_json_stringify(
    "ToJsonNull",
)<ToJsonNull>(
    ToJsonNull
)((input) => typia.json.stringify<ToJsonNull>(input));
