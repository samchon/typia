import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagTuple } from "../../../structures/TypeTagTuple";

export const test_json_application_ajv_TypeTagTuple = _test_json_application(
    "ajv",
)("TypeTagTuple")(typia.json.application<[TypeTagTuple], "ajv">());
