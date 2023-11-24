import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";

export const test_json_application_ajv_ObjectDynamic = _test_json_application(
  "ajv",
)("ObjectDynamic")(typia.json.application<[ObjectDynamic], "ajv">());
