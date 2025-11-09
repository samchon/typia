import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_json_stringify_ToJsonDouble = (): void => _test_json_stringify(
    "ToJsonDouble",
)<ToJsonDouble>(
    ToJsonDouble
)((input) => typia.json.stringify<ToJsonDouble>(input));
