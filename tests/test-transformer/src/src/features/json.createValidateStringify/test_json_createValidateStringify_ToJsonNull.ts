import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_json_createValidateStringify_ToJsonNull = (): void => _test_json_validateStringify(
    "ToJsonNull",
)<ToJsonNull>(
    ToJsonNull
)(typia.json.createValidateStringify<ToJsonNull>());
