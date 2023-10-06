import typia from "../../../src";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_json_validateStringify_ToJsonNull = _test_json_validateStringify(
    "ToJsonNull",
)<ToJsonNull>(
    ToJsonNull
)((input) => typia.json.validateStringify<ToJsonNull>(input));
