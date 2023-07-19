import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_json_application_ajv_ArrayMatrix = _test_json_application(
    "ajv",
)("ArrayMatrix")(typia.json.application<[ArrayMatrix], "ajv">());
