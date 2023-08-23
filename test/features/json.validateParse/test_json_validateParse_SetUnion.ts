import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { SetUnion } from "../../structures/SetUnion";

export const test_json_validateParse_SetUnion = _test_json_validateParse(
    "SetUnion",
)<SetUnion>(SetUnion)((input) => typia.json.validateParse<SetUnion>(input));
