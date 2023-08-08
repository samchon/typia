import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicConstant } from "../../../../structures/DynamicConstant";

export const test_json_application_ajv_DynamicConstant = _test_json_application(
    "ajv",
)("DynamicConstant", typia.json.application<[DynamicConstant], "ajv">());
