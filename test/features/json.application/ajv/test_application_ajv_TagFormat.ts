import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TagFormat } from "../../../structures/TagFormat";

export const test_json_application_ajv_TagFormat = _test_json_application(
    "ajv",
)("TagFormat", typia.json.application<[TagFormat], "ajv">());
