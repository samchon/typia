import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { SetAlias } from "../../structures/SetAlias";

export const test_json_validateParse_SetAlias = _test_json_validateParse(
    "SetAlias",
)<SetAlias>(SetAlias)((input) => typia.json.validateParse<SetAlias>(input));
