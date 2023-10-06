import typia from "../../../src";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { SetSimple } from "../../structures/SetSimple";

export const test_json_stringify_SetSimple = _test_json_stringify(
    "SetSimple",
)<SetSimple>(
    SetSimple
)((input) => typia.json.stringify<SetSimple>(input));
