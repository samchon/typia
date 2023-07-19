import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectGeneric } from "../../../../structures/ObjectGeneric";

export const test_json_application_ajv_ObjectGeneric = _test_json_application(
    "ajv",
)("ObjectGeneric")(typia.json.application<[ObjectGeneric], "ajv">());
