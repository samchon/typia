import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_json_createValidateStringify_ToJsonArray = (): void => _test_json_validateStringify(
    "ToJsonArray",
)<ToJsonArray>(
    ToJsonArray
)(typia.json.createValidateStringify<ToJsonArray>());
