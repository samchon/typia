import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TagPattern } from "../../../structures/TagPattern";

export const test_json_application_ajv_TagPattern = _test_json_application(
    "ajv",
)("TagPattern", typia.json.application<[TagPattern], "ajv">());
