import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ToJsonNull } from "../../../../structures/ToJsonNull";

export const test_json_application_ajv_ToJsonNull = _test_json_application(
    "ajv",
)("ToJsonNull")(typia.json.application<[ToJsonNull], "ajv">());
