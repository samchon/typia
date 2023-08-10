import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TagDefault } from "../../../structures/TagDefault";

export const test_json_application_ajv_TagDefault = _test_json_application(
    "ajv",
)("TagDefault")(typia.json.application<[TagDefault], "ajv">());
