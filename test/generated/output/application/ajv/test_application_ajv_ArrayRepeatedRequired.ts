import typia from "typia";

import { _test_application } from "../../../../internal/_test_application";
import { ArrayRepeatedRequired } from "../../../../structures/ArrayRepeatedRequired";

export const test_application_ajv_ArrayRepeatedRequired = _test_application(
    "ajv",
)("ArrayRepeatedRequired", typia.application<[ArrayRepeatedRequired], "ajv">());
