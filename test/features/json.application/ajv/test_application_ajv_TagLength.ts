import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TagLength } from "../../../structures/TagLength";

export const test_json_application_ajv_TagLength = _test_json_application(
    "ajv",
)("TagLength", typia.json.application<[TagLength], "ajv">());
