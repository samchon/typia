import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { NativeUnion } from "../../../structures/NativeUnion";

export const test_json_application_ajv_NativeUnion = _test_json_application(
    "ajv",
)("NativeUnion", typia.json.application<[NativeUnion], "ajv">());
