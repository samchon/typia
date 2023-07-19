import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { NativeSimple } from "../../../../structures/NativeSimple";

export const test_json_application_ajv_NativeSimple = _test_json_application(
    "ajv",
)("NativeSimple")(typia.json.application<[NativeSimple], "ajv">());
