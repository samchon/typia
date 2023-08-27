import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TypeTagMatrix } from "../../../../structures/TypeTagMatrix";

export const test_json_application_ajv_TypeTagMatrix = _test_json_application(
    "ajv",
)("TypeTagMatrix")(typia.json.application<[TypeTagMatrix], "ajv">());
