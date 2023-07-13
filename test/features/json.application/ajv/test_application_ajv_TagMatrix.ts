import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TagMatrix } from "../../../structures/TagMatrix";

export const test_json_application_ajv_TagMatrix = _test_json_application(
    "ajv",
)("TagMatrix", typia.json.application<[TagMatrix], "ajv">());
