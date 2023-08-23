import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { SetSimple } from "../../structures/SetSimple";

export const test_json_isParse_SetSimple = _test_json_isParse(
    "SetSimple",
)<SetSimple>(SetSimple)((input) => typia.json.isParse<SetSimple>(input));
