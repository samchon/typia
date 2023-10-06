import typia from "../../../src";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { SetAlias } from "../../structures/SetAlias";

export const test_json_createIsStringify_SetAlias = _test_json_isStringify(
    "SetAlias",
)<SetAlias>(
    SetAlias
)(typia.json.createIsStringify<SetAlias>());
