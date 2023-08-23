import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { SetSimple } from "../../structures/SetSimple";

export const test_json_validateParse_SetSimple = _test_json_validateParse(
    "SetSimple",
)<SetSimple>(SetSimple)(typia.json.createValidateParse<SetSimple>());
