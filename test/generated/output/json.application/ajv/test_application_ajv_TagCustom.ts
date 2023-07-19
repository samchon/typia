import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TagCustom } from "../../../../structures/TagCustom";

export const test_json_application_ajv_TagCustom = _test_json_application(
    "ajv",
)("TagCustom")(typia.json.application<[TagCustom], "ajv">());
