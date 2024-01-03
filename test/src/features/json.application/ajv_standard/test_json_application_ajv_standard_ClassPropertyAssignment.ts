import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_json_application_ajv_standard_ClassPropertyAssignment =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ClassPropertyAssignment",
  })(typia.json.application<[ClassPropertyAssignment], "ajv", false>());
