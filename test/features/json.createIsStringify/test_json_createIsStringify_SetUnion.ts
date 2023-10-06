import typia from "../../../src";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { SetUnion } from "../../structures/SetUnion";

export const test_json_createIsStringify_SetUnion = _test_json_isStringify(
    "SetUnion",
)<SetUnion>(
    SetUnion
)(typia.json.createIsStringify<SetUnion>());
