import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ClassGetter } from "../../../structures/ClassGetter";

export const test_json_application_ajv_surplus_ClassGetter =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ClassGetter",
  })(typia.json.application<[ClassGetter], "ajv", true>());
