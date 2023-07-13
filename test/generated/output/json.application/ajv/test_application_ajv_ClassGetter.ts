import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ClassGetter } from "../../../../structures/ClassGetter";

export const test_json_application_ajv_ClassGetter = _test_json_application(
    "ajv",
)("ClassGetter", typia.json.application<[ClassGetter], "ajv">());
