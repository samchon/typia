import typia from "typia";

import { _test_application } from "../../../../internal/_test_application";
import { ArrayRepeatedNullable } from "../../../../structures/ArrayRepeatedNullable";

export const test_application_ajv_ArrayRepeatedNullable = _test_application(
    "ajv",
)("ArrayRepeatedNullable", typia.application<[ArrayRepeatedNullable], "ajv">());
