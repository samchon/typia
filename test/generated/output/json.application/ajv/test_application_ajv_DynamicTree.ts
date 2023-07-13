import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicTree } from "../../../../structures/DynamicTree";

export const test_json_application_ajv_DynamicTree = _test_json_application(
    "ajv",
)("DynamicTree", typia.json.application<[DynamicTree], "ajv">());
