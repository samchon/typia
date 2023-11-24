import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectAlias } from "../../../structures/ObjectAlias";

export const test_json_application_ajv_ObjectAlias = _test_json_application(
  "ajv",
)("ObjectAlias")(typia.json.application<[ObjectAlias], "ajv">());
