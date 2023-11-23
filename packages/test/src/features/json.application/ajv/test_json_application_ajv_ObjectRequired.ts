import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectRequired } from "../../../structures/ObjectRequired";

export const test_json_application_ajv_ObjectRequired = _test_json_application(
  "ajv",
)("ObjectRequired")(typia.json.application<[ObjectRequired], "ajv">());
