import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_json_application_ajv_surplus_ClassPropertyAssignment =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ClassPropertyAssignment",
  })(typia.json.application<[ClassPropertyAssignment], "ajv", true>());
