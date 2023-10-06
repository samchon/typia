import typia from "../../../src";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_json_stringify_ToJsonArray = _test_json_stringify(
    "ToJsonArray",
)<ToJsonArray>(
    ToJsonArray
)((input) => typia.json.stringify<ToJsonArray>(input));
