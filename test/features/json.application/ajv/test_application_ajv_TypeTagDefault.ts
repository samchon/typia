import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";

export const test_json_application_ajv_TypeTagDefault = _test_json_application(
    "ajv",
)("TypeTagDefault")(typia.json.application<[TypeTagDefault], "ajv">());
