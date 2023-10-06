import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagArray } from "../../../structures/TypeTagArray";

export const test_json_application_ajv_TypeTagArray = _test_json_application(
    "ajv",
)("TypeTagArray")(typia.json.application<[TypeTagArray], "ajv">());
