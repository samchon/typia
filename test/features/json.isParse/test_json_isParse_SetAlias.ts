import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { SetAlias } from "../../structures/SetAlias";

export const test_json_isParse_SetAlias = _test_json_isParse(
    "SetAlias",
)<SetAlias>(SetAlias)((input) => typia.json.isParse<SetAlias>(input));
