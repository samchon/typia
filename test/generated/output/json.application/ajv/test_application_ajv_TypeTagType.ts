import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TypeTagType } from "../../../../structures/TypeTagType";

export const test_json_application_ajv_TypeTagType = _test_json_application(
    "ajv",
)("TypeTagType")(typia.json.application<[TypeTagType], "ajv">());
