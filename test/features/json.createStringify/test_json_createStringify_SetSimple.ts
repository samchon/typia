import typia from "../../../src";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { SetSimple } from "../../structures/SetSimple";

export const test_json_createStringify_SetSimple = _test_json_stringify(
    "SetSimple",
)<SetSimple>(
    SetSimple
)(typia.json.createStringify<SetSimple>());
