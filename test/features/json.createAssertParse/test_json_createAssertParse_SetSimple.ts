import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { SetSimple } from "../../structures/SetSimple";

export const test_json_assertParse_SetSimple = _test_json_assertParse(
    "SetSimple",
)<SetSimple>(SetSimple)(typia.json.createAssertParse<SetSimple>());
